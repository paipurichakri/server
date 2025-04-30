const express = require("express");
const router = express.Router();
const Cart = require("../Model/cartmodel");

router.post("/", async (req, res) => {
  try {
    const cartItem = new Cart(req.body);
    await cartItem.save();
    res.status(201).json({ message: "Item added to cart", cartItem });
  } catch (err) {
    res.status(500).json({ error: "Failed to add to cart" });
  }
});

router.get("/", async (req, res) => {
  try {
    const items = await Cart.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch cart items" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ message: "Item removed from cart" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete item" });
  }
});

module.exports = router;
