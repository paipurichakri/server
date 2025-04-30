let express = require("express");

let servers = require("../Model/servermodel");

let serverRouting = express.Router();

serverRouting.post("/",async(req,res)=>{
    let server = new servers(req.body);
    let result = await server.save();
    res.send(result);
})

serverRouting.get("/",async(req,res)=>{
    let server = await servers.find();
    res.send(server);
})

module.exports = serverRouting;