const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports.userAuth = async (req, res, next)=>{

const token = req.cookies.token || req.headers.authorization?.split(' ')[1]

if(!token){
 return  res.status(401).json({message:'unauthorized'})
}

 const isBlackListed = await userModel.findOne({token:token})
 if(isBlackListed){
  return res.status(401).json({message:'Unauthorized'})
 }

try{

  const decode = jwt.verify(token, process.env.JWT_SECRET)
  const user = await userModel.findById(decode._id)
  req.user = user
  return next()

}catch(err){
return res.status(401).json({message:'Unauthorize'})
}

}

