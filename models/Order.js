const mongoose = require("mongoose");


const OrderSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true
  },
  record: {
    type: Number,
    required: true
  }
});

const OrderModel = mongoose.model("Order",OrderSchema)
module.exports = OrderModel
