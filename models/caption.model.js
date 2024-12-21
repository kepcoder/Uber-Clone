const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const captainSchema = new mongoose.Schema({

    fullname:{
        firstName:{
            type:String,
            required:true,
            minlength:[3,'firstName must be atleast 3 characters long']
        },
        lastName:{
            type:String,
            minlength:[3,'lastName must be atleast 3 characters long']
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,'Email must be atleast 5 characters long']
    },
    password:{
        type:String,
        required:true,
        minlength:[6, 'Pasword length is must be grater than 6 characters']
    },
    socketId:{
        type:String,
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive',
    },
    vehicle:{
        colour:{
            type:String,
            required:true,
            minlength:[3,'Colour is must be greater than 3 characters']
        },
        plate:{
        type:String,
        required:true,
        minlength:[3,'Colour is must be greater than 3 characters']
        },
        capacity:{
            type:Number,
            required:true,
            minlength:[1,"capacity is must be greater than 1"]
        },
        vehicleType:{
          type:String,
          required:true,
          enum:['car', 'motorCycle', 'Auto']
        }
    },
    location:{
        lat:{
            type:Number,
        },
        log:{
            type:Number,
        }

    }
})

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'})
    return token
}
captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
}
captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10)
}


const captainModel = mongoose.model('captain', captainSchema)

module.exports = captainModel