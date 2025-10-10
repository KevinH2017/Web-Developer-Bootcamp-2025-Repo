const mongoose = require('mongoose');

mongoose.set('strictQuery', true);                       // Supresses strictQuery warning message
mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })  // Must use port 27017
    .then(() => {
        console.log("MONGO CONNECTION OPEN!");
    })
    .catch(err => {
        console.log("MONGO ERROR OCURRED!");
        console.log(err);
    })

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            _id: { _id: false },
            street: String,
            city: String,
            state: String,
            country: {
                type: String,
                required: true
            },
        }
    ]
});

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter',
    })
    u.addresses.push({
        street: '123 Seasame Street',
        city: 'New York',
        state: 'NY',
        country: 'USA',
    })
    const res = await u.save();
    console.log(res)
}

const addAddress = async(id) => {
    const user = await User.findById(id);
    user.addresses.push({
        street: '99 Third Street',
        city: 'Boston',
        state: 'MA',
        country: 'USA',
    }
    )
    const res = await user.save();
    console.log(res)
}

makeUser();
addAddress('65ba6e53bc9a4f37c0e91119');     // Adds another address to user with this id