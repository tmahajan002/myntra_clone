const mongoose = require('mongoose');
const moment = require('moment')
const Schema = mongoose.Schema;

var adminSchema = new Schema({
    email: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    status: {
        type: Number,
        default: 1
    },
    created_on: {
        type: Number,
        default: moment().unix()
    }
});

module.exports = mongoose.model('Admin', adminSchema, 'admin')