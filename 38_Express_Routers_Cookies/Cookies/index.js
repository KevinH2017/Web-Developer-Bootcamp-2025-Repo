const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser('thisismysecret'));            // If this changes, it invalidates cookies created with the old secret

app.get('/greet', (req, res) => {
    const { name = 'anonymous' } = req.cookies;
    res.send(`HELLO ${name}!`)
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'Kevin Hui')                 // Creates cookie Name with Value
    res.cookie('animal', 'harlequin shrimp')
    res.send('COOKIE WAS SENT')
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true })
    res.send('COOKIE WAS SIGNED')
})

app.get('/verifyfruit', (req, res) => {
    console.log(req.cookies)                // Shows cookies that do not require signature
    console.log(req.signedCookies)          // Only shows cookies with valid signature
    res.send(req.signedCookies)
})

app.listen(8080, () => {
    console.log("LISTENING ON localhost:8080!")
});