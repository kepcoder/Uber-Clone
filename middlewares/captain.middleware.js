const captainModel = require('../models/caption.model')
const jwt = require('jsonwebtoken')


module.exports.captainProfile = async(req, res, next)=>{

    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]
    if(!token){
        return res.status(400).json('Unauthorized')
    }

    const isBlackListed = await captainModel.findOne({token:token})
    if(isBlackListed){
        return res.status(400).json('Unauthorized')
    }
try{
    const decode = jwt.verify(token,process.env.JWT_SECRET)
    const captain = await captainModel.findById(decode._id)
    req.captain = captain
    return next()
}catch(err){
  return res.status(400).json("Unauthorized")
}


}