const express = require('express');
const app = express();
const session = require('express-session');

const sessionOptions = {
    secret: 'thisismysecret',
    // Removes deprecation warnings
    resave: false,
    saveUninitialized: false
}

// Creates session id to browser
app.use(session(sessionOptions));

app.get('/', (req, res) => {
    res.send("HOMEPAGE")
});;

// Counts how many times page is viewed by checking session id
app.get('/viewcount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    const count = req.session.count;
    res.send(`You visited this page: ${count} times!`);
});

// /register?username=username
app.get('/register', (req, res) => {
    const { username = 'Anonymous' } = req.query;
    req.session.username = username;
    res.redirect('/greet');
});

app.get('/greet', (req, res) => {
    const { username } = req.session;
    res.send(`Welcome Back, ${username}!`);
});

app.listen(8080, () => {
    console.log("LISTENING ON localhost:8080!")
});