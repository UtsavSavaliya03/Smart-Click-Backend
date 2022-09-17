const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: String,
    productId: {
        type: String, ref: 'Product'
    },
    address: String
})

module.exports = mongoose.model('order', orderSchema);