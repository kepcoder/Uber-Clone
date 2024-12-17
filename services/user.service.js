const { validationResult } = require('express-validator')
const userModel = require('../models/user.model')

module.exports.createUser = async ({
    firstName, lastName,email, password
})=>{
    if(!firstName || !email || !password){
        throw new Error('All fields are required!')
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
        throw new Error('Email is already registered!');
    }
    const user = userModel.create({
        fullname:{
            firstName,
            lastName
        },
        email,
        password
    })
    
    return user
}
