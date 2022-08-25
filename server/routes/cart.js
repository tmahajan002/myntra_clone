var express = require('express');
var router = express.Router();
var CartController = require('../controller/Cart');
const upload = require('../services/image_upload')

router.post('/add_cart', CartController.addTocart);
router.get('/cart_detail', CartController.getCartDetail);

router.get('*', (req, res) => { res.status(405).json({ status: false, message: "Invalid Get Request" }) });
router.post('*', (req, res) => { res.status(405).json({ status: false, message: "Invalid Post Request" }) });

module.exports = router;