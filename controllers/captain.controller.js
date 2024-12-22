const captainModel = require('../models/caption.model')
const {validationResult} = require('express-validator')
const captainService = require('../services/captain.service')
const blacklistedModel = require('../models/blacklist.model')

module.exports.registerCaptain= async (req, res, next)=>{

       const errors = validationResult(req)
       if(!errors.isEmpty()){
         return res.status(400).json({errors:errors.array()})
       }
       const {fullname, email, password, vehicle} = req.body

       const iscaptainExsisted = await captainModel.findOne({email});
       if(iscaptainExsisted){
        return res.status(400).json({message:'Email Already registered'})
       }
       const hashedPassword = await captainModel.hashPassword(password)

       const captain = await captainService.createCaptain({
        firstName:fullname.firstName,
        lastName:fullname.lastName,
        email,
        password:hashedPassword,
        colour:vehicle.colour,
        plate:vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType
       })
       const token = captain.generateAuthToken()
       res.status(201).json({token, captain})

}

module.exports.captainLogin = async(req, res, next)=>{

      const errors = validationResult(req);

      if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
      }

      const {email , password} = req.body

      const captain = await captainModel.findOne({email}).select('+password')

      if(!captain){
        return res.status(400).json('Invalid email or password')
      }

      const isMatch = await captain.comparePassword(password)
      if(!isMatch){
        return res.status(400).json('Invalid Email or password')
      }
      const token = captain.generateAuthToken()
      res.cookie('token', token);
      return res.status(200).json({token, captain})
}
module.exports.captainProfile = async(req, res, next)=>{
  res.status(200).json(req.captain)
}

module.exports.captainLogout = async (req, res, next)=>{
    res.clearCookie('token')
    const token = req.cookies.token || req.headers.authorization.split(' ')[1]
    await blacklistedModel.create({token})
    res.status(200).json({message:'Logout successfully '})
}