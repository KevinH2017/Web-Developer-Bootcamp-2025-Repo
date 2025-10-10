const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.set('strictQuery', true);                       // Supresses strictQuery warning message
mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })  // Must use port 27017
    .then(() => {
        console.log("MONGO CONNECTION OPEN!");
    })
    .catch(err => {
        console.log("MONGO ERROR OCURRED!");
        console.log(err);
    })

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'username cannot be blank'],
    },
    age: Number,
});

const tweetSchema = new Schema({
    text: {
        type: String,
        required: [true, 'tweet cannot be blank']
    },
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User'}
});

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweets = async () => {
    // const user1 = new User({
    //     username: 'ChickenFan99',
    //     age: 61,
    // });
    // const user2 = new User({
    //     username: 'DuckQuack23',
    //     age: 44,
    // });
    // const user = await User.findOne({ username: 'ChickenFan99' });
    // const tweet1 = new Tweet({
    //     text: 'omg I love my chickens!',
    //     likes: 0,
    // });
    // const tweet2 = new Tweet({
    //     text: 'bock bock bock my chickens noises',
    //     likes: 1234,
    // });
    // tweet2.user = user;
    // user.save();
//     tweet2.save();
// };

// makeTweets();

const findTweet = async () => {
    const t = await Tweet.find({}).populate('user')
    console.log(t)
}

findTweet();