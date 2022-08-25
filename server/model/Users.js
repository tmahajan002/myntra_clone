const mongoose = require('mongoose');
const moment = require('moment')
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        default: '',
        trim: true
    },
    email: {
        type: String,
        default: '',
        trim: true
    },
    phone_no: {
        type: String,
        default: ''
    },
    status: {
        type: Number,
        default: 1
    },
    password: {
        type: String
    },
    created_at: {
        type: Number
    }
});
module.exports = mongoose.model('User', UserSchema, 'user')