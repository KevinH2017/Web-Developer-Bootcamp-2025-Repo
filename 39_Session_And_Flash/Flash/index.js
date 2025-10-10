const express = require('express');
const app = express();
const flash = require('connect-flash');
const path = require('path');
const session = require('express-session');
const mongoose = require('mongoose');

const Farm = require('./models/farm')

const sessionOptions = {
    secret: 'thisismysecret',
    // Removes deprecation warnings
    resave: false,
    saveUninitialized: false
}
app.use(session(sessionOptions));
app.use(flash());

// Points to node_modules folder relative to this file
module.exports = {
    resolve: {
      modules: [path.resolve('../..', 'node_modules'), 'node_modules']
    }
  };

mongoose.set('strictQuery', true);                       // Supresses strictQuery warning message
mongoose.connect('mongodb://127.0.0.1:27017/flashDemo')  // Must use port 27017
    .then(() => {
        console.log("MONGO CONNECTION OPEN!");
    })
    .catch(err => {
        console.log("MONGO ERROR OCURRED!");
        console.log(err);
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.locals.messages = req.flash('success');
    return next();
})

app.get('/', async (req, res) => {
    res.send("My Farm Products Homepage");
})

// FARM ROUTES
app.get('/farms', async (req, res) => {
    const farms = await Farm.find({})
    res.render('farms/index', { farms })
})

app.get('/farms/new', (req, res) => {
    res.render('farms/new')
})

app.post('/farms', async (req, res) => {
    const farm = new Farm(req.body)
    await farm.save();
    res.redirect('/farms')
})

app.get('/farms/:id', async (req, res) => {
    const farm = await Farm.findById(req.params.id).populate('products');
    console.log(farm);
    res.render('farms/show', { farm });
})

app.post('/farms', async (req, res) => {
    const farm = new Farm(req.body);
    await farm.save();
    req.flash('success', 'Successfully made a new farm!')
    res.redirect('/farms')
})

app.listen(8080, () => {
    console.log("LISTENING ON localhost:8080!")
});