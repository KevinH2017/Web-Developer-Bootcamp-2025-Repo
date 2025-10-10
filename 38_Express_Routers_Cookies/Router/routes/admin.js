const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.query.isAdmin) {
      return next();
    }
    res.send("REQUEST DENIED!")
})

router.get('/topsecret', (req, res) => {
    res.send('THIS IS TOP SECRET!')
})

router.get('/deleteeverything', (req, res) => {
    res.send('DELETED EVERYTHING!')
})

module.exports = router;