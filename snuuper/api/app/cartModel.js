const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    id: String,
    items: Array,
    Total: Number
});

module.exports = mongoose.model('Cart', CartSchema);