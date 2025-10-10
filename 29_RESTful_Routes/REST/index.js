const express = require('express');
const app = express();
const path = require('path');
// Allows PATCH and DELETE http codes to be used by a user
const methodOverride = require('method-override')
// uuid = Universally Unique ID, an integer
const { v4: uuid } = require('uuid');

// Parses data from url input and puts it into json format
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('__method'))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Must be let data-type to be able to delete
let comments = [
    {
        id: uuid(),
        username: "Todd",
        comment: "This is a comment!"
    },
    {
        id: uuid(),
        username: "Skyler",
        comment: "This is another comment."
    },
    {
        id: uuid(),
        username: "Jeff",
        comment: "Comment that comes next?"
    },
    {
        id: uuid(),
        username: "Bob",
        comment: "This comment is here."
    }
]

app.get('/', (req, res) => {
    res.send("Hello, this is my website!")
})

// Index to show multiple comments
app.get('/comments', (req, res) => {
    res.render("comments/index", { comments })
})

// Renders a form to create new comment
app.get('/comments/new', (req, res) => {
    res.render("comments/new")
})

// Takes input from form to create new comment
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() })
    res.redirect('/comments');              // Once the comment is submitted, website is redirected to /comments including the new comment
})

// Shows the details of a comment, username and UUID
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
})

// Edit - renders a form to edit a comment 
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment })
})

// Updates the old comment with new comment
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundcomment = comments.find(c => c.id === id);
    foundcomment.comment = newCommentText;
    res.redirect('/comments');
})

// Deletes the comment
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})

app.get('/tacos', (req, res) => {
    res.send("Get /tacos response")
})

// Parses data from request form and puts it into variables
app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`Here is your order: ${qty} ${meat} tacos!`)
})

app.listen(8080, () => {
    console.log("Listening on port 8080!")
})

