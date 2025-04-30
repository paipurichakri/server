
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  subservice: String,
  price: Number,
  quantity: Number,
  total: Number,
  hotelname: String,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Cart", cartSchema);
