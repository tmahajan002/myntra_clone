var Product = require('../utils/Product');
var helpers = require('../helpers');
let Apifeature = require('../services/apifeatures')

const ProductController = {
    createProduct: async (req, res) => {
        let images = []
        if (req.files.file1.length > 0) {
            for (let i = 0; i < req.files.file1.length; i++) {
                images.push({ url: `products/${req.files.file1[i].filename}` })
            }
        }
        req.body.images = images
        let response = await Product.createProduct(req.body)
        return helpers.showOutput(res, response, response.code);
    },
    productDetail: async (req, res) => {
        let response = await Product.productDetail(req.params.id)
        return helpers.showOutput(res, response, response.code);
    },
    
    getHomeData: async (data) => {
        const { low, date, width } = data
        const apifeature = new Apifeature(Product.find(), req.query).filter().sort(low, date).pagination(width).search()
        const apifeature1 = new Apifeature(Product.find(), req.query).search()
        const apifeature3 = new Apifeature(Product.find(), req.query).filter().sort(low, date).search()
        const products = await apifeature.Product_find;
        const pro = await apifeature1.Product_find;
        const productlength = await apifeature3.Product_find;
        let length = productlength.length
        res.status(200).json({
            products,
            pro,
            length
        })
    }
}

module.exports = {
    ...ProductController
}