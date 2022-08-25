var Cart = require('../utils/Cart');
var helpers = require('../helpers');
const moment = require('moment')

const CartController = {
    addTocart: async (req, res) => {
        let response = await Cart.addTocart(req.body)
        return helpers.showOutput(res, response, response.code);
    },
    
    getCartDetail: async (req, res) => {
        let response = await Cart.getCartDetail(req.params.id)
        return helpers.showOutput(res, response, response.code);
    },
}

module.exports = {
    ...CartController
}