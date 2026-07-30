const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    title:String,
    products: [String],
});

const Category = mongoose.model("Gategory",catSchema);

module.exports = Category;