let express = require("express");

let subservices = require("../Model/subservicemodel");

let subserviceRouting = express.Router();

subserviceRouting.post("/",async(req,res)=>{
    let service = new subservices(req.body);
    let result = await service.save();
    res.send(result);
})

subserviceRouting.get("/",async(req,res)=>{
    let service= await subservices.find();
    res.send(service);
})

// subserviceRouting.get("/:dname",async(req,res)=>{
//     let dname = req.params.dname;
//     let server= await subservices.findOne({dname:dname});
//     res.send(server);
// })

subserviceRouting.get("/:dservice", async (req, res) => {
    console.log(req.params);
    try {
      const data = await subservices.find({ service: req.params.dservice });
      console.log(data);
      res.json(data);
    } catch (err) {
      console.error("Error fetching subservices:", err);
      res.status(500).json({ error: "Server Error" });
    }
  });

module.exports = subserviceRouting;