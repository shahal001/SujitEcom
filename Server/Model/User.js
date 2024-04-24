const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  
    name:{
        type:String,
        required:[true,"enter your name"]
    },
    email:{
        type:String,
        required:[true,"enter your email"]
    },
    password:{
        type:String,
        required:[true,"password pleasse"],
        minlength:[5,"atleast 5 char"],
        select:false,
    },
    phoneNumber:{
        type:Number,
        required:true,
    },
    address:[
        {
            country:{
                type:String
            },
            city:{
                type:String
            },
            address1:{
                type:String
            },
            zipCode:{
                type:String
            },
            addressType:{
                type:String
            }

        }
    ],
    role:{
        type:String,
        default:users

    },
    avatar:{
       public_id:{
        type:String,
        required:false
       },
       url:{
        type:String,
        required:false

       }

    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
    
    
})

module.exports = mongoose.model("user2",userSchema)