const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    phone: { type: String, require: true },
    image: { type: String, require: true },
    created: { type: Date, require: true, default: Date.now },
});

// Corrected export statement
const User = mongoose.model('User', userSchema);
module.exports = User;
