const mongoose = require('mongoose');
const Joi = require('joi');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: [true, 'Please add a email'],
        maxlength: 50
    },
    Password: {
        type: Password,
        required: [true, 'Please create a password'],
        maxlength: 50
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    userName: {
        type: String,
        trim: true,
        required: [true, 'Please create a username'],
        maxlength: 50
    }
});



module.exports = mongoose.model('Transaction', TransactionSchema);