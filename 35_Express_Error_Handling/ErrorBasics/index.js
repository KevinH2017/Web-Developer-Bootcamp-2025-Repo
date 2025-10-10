const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');   // Middleware that logs and formats HTTP responses and outputs to console
const AppError = require('./AppError');
const { stat } = require('fs');

// Points to node_modules folder relative to this file
module.exports = {
    resolve: {
        modules: [path.resolve('../..', 'node_modules'), 'node_modules']
    }
};

// morgan documentation: https://github.com/expressjs/morgan
app.use(morgan('tiny'));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    return next();
});

app.use('/dogs', (req, res, next) => {
    console.log("I LOVE DOGS!")
    return next();
});

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if(password === 'chicken') {
        return next();
    }
    throw new AppError("Password Required!", 401)
};

app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send("HOME PAGE");
});

app.get('/error', (req, res) => {
    chicken.fly()
})

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send("WOOF!!!");
});

// Only displays page if password in url is valid
app.get('/secret', verifyPassword, (req, res) => {
    res.send('THIS IS A SECRET PAGE')
});

app.get('/admin', (req, res) => {
    throw new AppError("You are not an Admin!", 403)            // 403, Authorization error
})

// Error handling when 404 is raised
app.use((req, res) => {
    res.status(404).send("NOT FOUND!")
})

// // Error handling, raises error in terminal
// app.use((err, req, res, next) => {
//     console.log("*************************")
//     console.log("********ERROR************")
//     console.log("*************************")
//     console.log(err)
//     return next(err);
// })

app.use((err, req, res, next) => {
    const { status = 500, message = 'SOMETHING WENT WRONG!' } = err;
    res.status(status).send(message)
})

app.listen(8080, () => {
    console.log("LISTENING ON localhost:8080")
});