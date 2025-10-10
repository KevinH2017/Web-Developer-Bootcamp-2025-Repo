// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// };

// // Function for rgb() to output RGB values
// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rbg(${r}, ${g}, ${b})`;
// };

// // Function for hex() to output hexadecimal values
// Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// // Gets RGB and Alpha values (default a=1)
// Color.prototype.rgba = function (a=1) {
//     const { r, g, b } = this;
//     return  `rgba(${r}, ${g}, ${b}, ${a})`
// };

// Class Color with methods rgb(), rgba(), and hex()
class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    // Functions within class
    innerRGB() {
        const { r, g, b } = this;     
        return `${r}, ${g}, ${b}`;
    }
    rgb() {
        return `rbg(${this.innerRGB()})`;
    }
    rgba(a=1.0) {
        return  `rgba(${this.innerRGB()}, ${a})`        
    }
    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
};

const colorOne = new Color(40, 50, 60, "color one");
const colorTwo = new Color(255, 123, 34, "color two");
const black = new Color(0, 0, 0, "black");