const mongoose = require('mongoose');
const moment = require('moment')
const Schema = mongoose.Schema;

var CartSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    product_id: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    color: {
        type: String,
        default: ''
    },
    size: {
        type: String,
        default: ''
    },
    quantity: {
        type: Number,
        default: 1
    },
    status: {
        type: Number,
        default: 1
    },
    created_on: {
        type: Number,
        default: moment().unix()
    },
    updated_on: {
        type: Number,
        default: moment().unix()
    }
})

module.exports = mongoose.model('Cart', CartSchema, 'cart')