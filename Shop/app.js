const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const rootDir = require('./util/path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));  

app.use('/admin', adminRoute.router);
app.use(shopRoute);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: "Page Not Found" });
});

app.listen(3000);