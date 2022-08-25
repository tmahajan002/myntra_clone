var express = require('express');
var router = express.Router();
var ProductController = require('../controller/Product');
const upload = require('../services/image_upload')

router.post('/create_product', upload.fields([{ name: 'file1', maxCount: 9 }]), ProductController.createProduct);
router.get('/product_detail', ProductController.productDetail);
router.get('/home_data', ProductController.getHomeData);

router.get('*', (req, res) => { res.status(405).json({ status: false, message: "Invalid Get Request" }) });
router.post('*', (req, res) => { res.status(405).json({ status: false, message: "Invalid Post Request" }) });
module.exports = router;