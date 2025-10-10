const mongoose = require('mongoose');

mongoose.set('strictQuery', true);                      // Supresses strictQuery warning message
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')  // Must use port 27017
    .then(() => {
        console.log("CONNECTION OPEN!")
    })
    .catch(err => {
        console.log("ERROR OCURRED!")
        console.log(err)
    })

// Explicit way to declare data types
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
});

// productSchema.methods.greet = function () {
//     console.log("HELLLO!!! HI!! HOWDY!!! ")
//     console.log(`- from ${this.name}`)
// }

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}

// Applies change to ALL entries in database
productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 })
}

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: "Mountain Bike" });
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    console.log(foundProduct)
    await foundProduct.addCategory("Outdoors");
    console.log(foundProduct)
}

Product.fireSale().then(res => console.log(res))

// findProduct();

// const bike = new Product({ name: "Tire Pump", price: 19.50, categories: ['Cycling'] });
// bike.save()
//     .then(data => {
//         console.log("Product Successfully Inserted!")
//         console.log(data)
//     })
//     .catch(err => {
//         console.log("ERROR OCURRED!")
//         console.log(err)
//     })

// // runValidators: true, makes sure that the new update values pass the validations set in the schema
// Product.findOneAndUpdate({ name: "Tire Pump" }, { price: 10.99 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log("Product Successfully Inserted!")
//         console.log(data)
//     })
//     .catch(err => {
//         console.log("ERROR OCURRED!")
//         console.log(err)
//     })