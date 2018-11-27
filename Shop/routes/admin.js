const path = require('path');
const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log("middleware");
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    //next();
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;