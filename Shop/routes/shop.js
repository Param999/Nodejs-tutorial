const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('shop:', adminData.products);
    res.render('shop', { pageTitle: "Shop", prods: adminData.products, path: '/' })
});

module.exports = router;