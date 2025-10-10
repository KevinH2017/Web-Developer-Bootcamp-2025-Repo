// document is not read in visual studio, but only in html / html console
// Grabs all instances of html tag 'img'
const allImages = document.getElementsByTagName('img');

// Replaces the img.src with a different image
for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
};


// Grabs all instances of html class 'square'
const squareImages = document.getElementsByClassName('square');
// Replaces html class 'square' with the below image link
for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
};

// document.querySelector() will only pick the FIRST instance
// const oneElement = document.querySelector('.square');         // Outputs <img class="square" src="https://upload.wikimedia…g/440px-Silky_bantam.jpg" alt="">


// Grabs a collection of all instances of html tags 'p' and 'a'
const links = document.querySelectorAll('p a');
// Outputs the links of those html tags into console
for (let link of links) {
    console.log(link.href);
};