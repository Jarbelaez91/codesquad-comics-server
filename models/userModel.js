const mongoose = require ("mongoose")

const {schema} = mongoose

const userSchema = new Schema ({
    firstName:{
        type:String,
        required:true,
        trim:true
    },

    lastName:{
        type:String,
        trim:true
    },
    userName:{
        type:String,
        required: true,
        unique: true,
        trim: true,
        lowerCase:true
    },
    password:{
        type:String,
        required:true,
        minLenght: 8,
    },

    googleId:{
        type:String
    },

    gitgubId:{
        type:String
    }
})

const User = mongoose.model ("User", userSchema)

module.exports = User