const express = require('express');
const app = express();
const User = require('./models/user');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session')

const sessionOptions = {
    secret: 'thisismysecret',
    // Removes deprecation warnings
    resave: false,
    saveUninitialized: false
}

// Creates session id to browser
app.use(session(sessionOptions));

// Checks if user_id is in browser, allowing user to access secured routes
const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    return next();
}

mongoose.set('strictQuery', true);                       // Supresses strictQuery warning message
mongoose.connect('mongodb://127.0.0.1:27017/authDemo')   
    .then(() => {
        console.log("MONGO CONNECTION OPEN!");
    })
    .catch(err => {
        console.log("MONGO ERROR OCURRED!");
        console.log(err);
    })

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("HOMEPAGE")
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const user = new User({ username, password })
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findAndValidate(username, password);
    if (foundUser) {
        req.session.user_id = foundUser._id;
        res.redirect('/secret')
    } else {
        res.redirect('/login')
    }
})

app.get('/secret', requireLogin, (req, res) => {
    res.render('secret');
})

app.post('/logout', (req, res) => {
    // req.session.user_id = null;
    req.session.destroy();
    res.redirect('/login');
})

app.get('/topsecret', requireLogin, (req, res) => {
    res.send("TOP SECRET")
})

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080")
})