// document.querySelectorAll() will take all the instances of html tag 'a' and puts it into allLinks variable
const allLinks = document.querySelectorAll('a');


// Changes the color and decorations for allLinks
for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}
