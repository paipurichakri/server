let mongoose = require("mongoose");

let serverschema =new  mongoose.Schema({
    hotelname:{
        type:String,
        required:true
    },
    service:{
        type:String,
        required:true
    },
    subservice:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("subservices",serverschema);