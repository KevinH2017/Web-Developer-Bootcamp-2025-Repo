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

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

// Virtuals are properties not stored in the database
personSchema.virtual("fullName")
    // get() creates an entry inside of node
    .get(function () {
        return `${this.first} ${this.last}`
    })
    // set() temporarily shows new string after combining the two substrings
    // Does not save new value
    .set(function (v) {
        this.first = v.substr(0, v.indexOf(' '));
        this.last = v.substr(v.indexOf(' ') + 1);
    })

// Overwrites any other input to be below other than what was inputted in node
personSchema.pre('save', async function () {
    this.first = "FirstName";
    this.last = "LastName";
    console.log("Please wait, saving...")
})

personSchema.post('save', async function () {
    console.log("Save successful!")
})

const Person = mongoose.model('Person', personSchema);