const captainModel = require('../models/caption.model')


module.exports.createCaptain = async ({
    firstName, lastName, email, password, colour, capacity,plate, vehicleType
})=>{
    if(!firstName || !email || !password || !colour | !capacity | !plate | !vehicleType){
      throw new Error('All fields are required')
    }

    const captain = await captainModel.create({
        fullname:{
            firstName,
            lastName
        },
        email,
        password,
        vehicle:{
            colour,
            plate,
            capacity,
            vehicleType
        }
    })
    return captain
}