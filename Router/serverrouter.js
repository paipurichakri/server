const express = require("express");
const servers = require("../Model/servermodel");

const serverRouting = express.Router();

// Create a new server document
serverRouting.post("/", async (req, res) => {
  try {
    const server = new servers(req.body);
    const result = await server.save();
    res.status(201).json(result); // 201 Created
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all server documents
serverRouting.get("/", async (req, res) => {
  try {
    const serverList = await servers.find();
    console.log(serverList);
    res.status(200).json(serverList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = serverRouting;
