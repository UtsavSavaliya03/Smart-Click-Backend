const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    email: String,
    contact: String,
    password: String,
    address: Array,
    token: String,
    createDate: Date,
    updateDate: Date
})

module.exports = mongoose.model('User', userSchema);