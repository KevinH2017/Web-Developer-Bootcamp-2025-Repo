const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters');
const dogRoutes = require('./routes/dogs');
const adminRoutes = require('./routes/admin');

app.get('/', (req, res) => {
  res.send("HOMEPAGE")
})

// Central place to change url links of routes
app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);
app.use('/admin', adminRoutes);

app.listen(8080, () => {
    console.log("LISTENING ON localhost:8080!")
});