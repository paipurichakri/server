let express = require("express");

let cors = require("cors");

let serverRouting = require("./Router/serverrouter"); 

let subserviceRouting = require("./Router/subservicerouter");

const cartRoutes = require("./Router/cartrouter");
const { default: mongoose } = require("mongoose");

require("./Database/db")


let app = express();

let port = process.env.PORT || 4000

app.use(express.json());

app.use(cors());


app.use("/server",serverRouting);

app.use("/subservice",subserviceRouting);

app.use("/cart", cartRoutes);

app.listen(port,()=>console.log("server started"));