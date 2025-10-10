const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

// Points to node_modules folder relative to this file
module.exports = {
    resolve: {
      modules: [path.resolve('../..', 'node_modules'), 'node_modules']
    }
  };
  
const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.set('strictQuery', true);                       // Supresses strictQuery warning message
mongoose.connect('mongodb://127.0.0.1:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })  // Must use port 27017
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
app.use(methodOverride('_method'));

const categories = ['fruit', 'vegetable', 'dairy', 'fungi']

app.get('/', async (req, res) => {
    res.send("My Farm Products Homepage");
})

app.get('/products', async (req, res) => {
    const { category } = req.query;
    if(category) {
        const products = await Product.find({ category })
        res.render('products/index', { products, category });
    } else {
        const products = await Product.find({});
        res.render('products/index', { products, category: 'All' });
    }
})

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories });
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    console.log(product);
    res.render('products/show', { product });
})

// Edits product details
app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories });
})

// Shows new edited product
app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080!")
})

