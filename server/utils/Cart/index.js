let Cart = require('../../model/Cart')
let Messages = require("./message");
let helpers = require('../../helpers');
let ObjectId = require('mongodb').ObjectId

const Cartutil = {
    addTocart: async (data) => {
        let { product_id, color, quantity, size, user_id } = data
        let newObj = {
            user_id: ObjectId(user_id),
            product_id: ObjectId(product_id),
            color: color,
            quantity,
            size,
            created_at: moment().unix()
        };
        const result = await Cart.create(newObj)
        if (result) {
            return helpers.showResponse(true, Messages.CART_SUCCESS, result.data, null, 200)
        }
        return helpers.showResponse(false, Messages.CART_FAILED, null, null, 200)
    },

    getCartDetail: async (data) => {
        let { user_id } = data
        let result = await Cart.find({ user_id: ObjectId(user_id) }, '')
        if (result) {
            return helpers.showResponse(true, Messages.CART_DETAILS_SUCCESS, result.data, null, 200)
        }
        return helpers.showResponse(false, Messages.CART_DETAILS_FAILED, null, null, 200)
    }
}

module.exports = {
    ...Cartutil
}