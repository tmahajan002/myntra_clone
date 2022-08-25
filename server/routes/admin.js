var express = require('express');
var router = express.Router();
var AdminController = require('../controller/Admin');

router.post('/login', AdminController.login);

router.get('*', (req, res) => { res.status(405).json({ status: false, message: "Invalid Get Request" }) });
router.post('*', (req, res) => { res.status(405).json({ status: false, message: "Invalid Post Request" }) });
module.exports = router;