let express = require("express");

let cors = require("cors");

let serverRouting = require("./Router/serverrouter"); 

let subserviceRouting = require("./Router/subservicerouter");

const cartRoutes = require("./Router/cartrouter");

const connectDB = require("./Database/db");
// const { default: mongoose } = require("mongoose");

// require("./Database/db")

require('dotenv').config();

let app = express();

let port = process.env.PORT || 4000

app.use(express.json());

app.use(cors());

connectDB();

app.use("/server",serverRouting);

app.use("/subservice",subserviceRouting);

app.use("/cart", cartRoutes);

app.listen(port,()=>console.log("server started"));