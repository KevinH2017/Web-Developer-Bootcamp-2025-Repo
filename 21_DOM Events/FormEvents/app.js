// Grabs input from input tags with ids tweetForm and tweets
const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();     // Prevents the event's default from happening, in this case it stops it from refreshing the page

    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

/**
 * Takes string input and adds it to html ul tag.
 * @param {String} username - String of username.
 * @param {String} tweet - String of tweet to post.
 */
const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}

