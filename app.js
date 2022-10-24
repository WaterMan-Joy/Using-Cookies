const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser())


app.get('/greet', (req, res) => {
    const { name = 'no-name' } = req.cookies;
    const { animal = 'no-animal' } = req.cookies;
    res.send(`Hello ${name}, Hi ${animal}`);
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'Joy');
    res.cookie('name', 'Han');
    res.cookie('animal', 'Mool Man');
    res.send('OK SENT YOU A COOKIES');
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000!!');
})