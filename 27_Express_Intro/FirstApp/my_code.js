// Launch with nodemon to automatically restart server with changes
const express = require("express");
const app = express();


// app.use((request, response) => {
//     console.log("A new request was made!")
//     // response.send("Request was received, Hello User! ")             // Sends string
//     // response.send({ color: "Red" })                                 // Sends JSON dictionary
//     // response.send("<h1>WELCOME TO MY WEBPAGE</h1>")                 // Uses html syntax to create heading
// })

app.get('/', (request, response) => {
    response.send("Welcome to my homepage!")
})

app.get('/r/:subreddit', (request, response) => {
    const { subreddit } = request.params;
    response.send(`<h1>Browsing the ${subreddit} subreddit!</h1>`)
})

app.get('/r/:subreddit/:postId', (request, response) => {
    const { subreddit, postId } = request.params;
    response.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit!</h1>`)
})

app.post('/cats', (request, response) => {
    response.send("POST REQUEST TO /cats! This is different from GET request!")
})

app.get('/cats', (request, response) => {
    response.send("MEOW! CAT REQUESTED!")
})

app.get('/dogs', (request, response) => {
    response.send("WOOF! DOG REQUESTED!")
})

// search?q= is the query object, &key=value will add more key-value pairs to query
app.get('/search', (request, response) => {
    console.log(request.query)
    const { q } = request.query;
    // Runs if search?q= has no string value
    if (!q) {
        response.send("No search input!")
    }
    response.send(`<h1>Search results for: ${q}</h1>`)
})

// Catch all for links that are not seen above, will overwrite any app.get() written below it
app.get('*', (request, response) => {
    response.send("ERROR! Unknown path!")
})

app.listen(8080, () => {
    console.log("Listening on Port 8080!")
})