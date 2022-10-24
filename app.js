const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser('thisismysecret'))


app.get('/greet', (req, res) => {
    const { name = 'no-name' } = req.cookies;
    const { animal = 'no-animal' } = req.cookies;
    const { cart = 'no-animal' } = req.cookies;
    res.send(`Hello ${name}, Hi ${animal}, AA ${cart.items}`);
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'Joy');
    res.cookie('animal', 'Mool Man');
    res.cookie('cart', { items: [1, 2, 3] });
    res.send('OK SENT YOU A COOKIES');
})

app.get('/getsigendcookie', (req, res) => {
    res.cookie('fruit', 'watermelon', { signed: true });
    res.send('GOOD');
})

app.get('/verifyfruit', (req, res) => {
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send(req.signedCookies);
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000!!');
})