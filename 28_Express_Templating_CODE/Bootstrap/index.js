const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

// Points to node_modules folder relative to this file
module.exports = {
    //...
    resolve: {
      modules: [path.resolve('../../..', 'node_modules'), 'node_modules']
    }
  };
  
// Uses static files inside of folder public, css and js
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
// Absolute path to folder views, allows views to be reached when index.js is run anywhere
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocked', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', { cats })
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data });
    } else {
        res.render("notfound", { subreddit });
    }
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1 
    res.render('random', { num })         // num is passed to random.ejs and can be read there
})

app.listen(8080, () => {
    console.log("Listening on port 8080!")
})