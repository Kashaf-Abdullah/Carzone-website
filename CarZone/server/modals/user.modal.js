const mongoose =require('mongoose')
const Schema=mongoose.Schema;

const userSchema=new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    photo:{
        type:String
    },
    phone : {
        type : Number,
        required : true
    },
    birthdate:{
        type:String
    },
    desc:{
        type:String,
        required:true
    },
    fuel:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }

})

const User=mongoose.model('User',userSchema)
module.exports=User