let Product = require('../../model/Product')
let Messages = require("./message");
let helpers = require('../../helpers');
let ObjectId = require('mongodb').ObjectId

const Productutil = {
    createProduct: async (data) => {
        let { brand, title, sellingPrice, mrp, size, bulletPoints, productDetails, material, specification, category, style_no, images, color, gender, stock } = data
        let newObj = {
            brand,
            title,
            sellingPrice,
            mrp,
            size,
            bulletPoints,
            productDetails,
            material,
            specification,
            category,
            style_no,
            images,
            color,
            gender,
            stock
        };
        const product = await Product.create(newObj)
        if (product) {
            return helpers.showResponse(true, Messages.PRODUCT_ADDED, product, null, 200);
        }
        return helpers.showResponse(false, Messages.PRODUCT_FAILURE, null, null, 200);
    },

    productDetail: async (data) => {
        let { product_id } = data
        let result = await Product.findOne({ _id: ObjectId(product_id) }, '')
        if (result) {
            return helpers.showResponse(true, Messages.PRODUCT_FOUND_SUCCESS, result, null, 200);
        }
        return helpers.showResponse(false, Messages.PRODUCT_NOT_FOUND, null, null, 404);
    },
}

module.exports = {
    ...Productutil
}