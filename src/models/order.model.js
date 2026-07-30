const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    type:String,
    product:String,
    category:String,
    date:Date
});

const Orders = mongoose.model("Order",orderSchema);

module.exports = Orders;