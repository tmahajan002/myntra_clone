require('./server/connection');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 5000;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

const user = require('./server/routes/user');
app.use("/user", user);

const admin = require('./server/routes/admin');
app.use("/admin", admin);

const product = require('./server/routes/product');
app.use("/product", product);

const cart = require('./server/routes/cart');
app.use("/cart", cart);

app.use('/files', express.static(__dirname + '/server/assets/'))
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});