const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extend: false }));  
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('App Successful listening on port 3000');
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api');

mongoose.connect(process.env.MLAB);
const Car = require('./app/cartModel.js');

app.use(bodyParser.urlencoded({ extend: false }));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('listening on port 3000');
});

app.get('/cart', (req, res) => {
    Car.find((err, cart) => {
        if (err)
            console.log(handleError(err));
        res.json(cart);
    });
});

app.post('/cart', (req, res) => {
    Car.create({
        id: req.query.id,
        items: req.query.items,
        price: req.query.price
    }, (err, cars) => {
        if (err)
            console.log(handleError(err));
        Car.find((err, cars) => {
            if (err)
                console.log(handleError(err));
            res.json(cars);
        });
    });
});
