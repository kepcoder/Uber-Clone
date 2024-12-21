const captainModel = require('../models/caption.model')
const {validationResult} = require('express-validator')
const captainService = require('../services/captain.service')

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
