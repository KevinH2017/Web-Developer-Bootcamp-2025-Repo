const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');   // Middleware that logs and formats HTTP responses and outputs to console

// Points to node_modules folder relative to this file
module.exports = {
  resolve: {
      modules: [path.resolve('../../..', 'node_modules'), 'node_modules']
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
  res.send("INCORRECT PASSWORD!")
};

// app.use((req, res, next) => {
//   console.log("THIS IS MY FIRST MIDDLEWARE!")
//   return next();        // Absolutely stops any code after next() from running
//   console.log("THIS IS MY 1.5 MIDDLEWARE! AFTER CALLING next()")
// })
// app.use((req, res, next) => {
//   console.log("THIS IS MY SECOND MIDDLEWARE!")
//   return next();
// })
// app.use((req, res, next) => {
//   console.log("THIS IS MY THIRD MIDDLEWARE!")
//   return next();
// })

app.get('/', (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`)
  res.send("HOME PAGE");
});

app.get('/dogs', (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`)
  res.send("WOOF!!!");
});

// Only displays page if password in url is valid
app.get('/secret', verifyPassword, (req, res) => {
  res.send('THIS IS A SECRET PAGE')
});

// Only runs when none of the above is valid, sends HTTP 404 error code
app.use((req, res) => {
  res.status(404).send("NOT FOUND!")
});

app.listen(8080, () => {
  console.log("LISTENING ON PORT 8080")
});