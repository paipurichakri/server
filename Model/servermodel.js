let mongoose = require("mongoose");

let serverschema =new  mongoose.Schema({
    service:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    status:{
        type:Number,
        default:1001
    }
})
module.exports = mongoose.model("services",serverschema);