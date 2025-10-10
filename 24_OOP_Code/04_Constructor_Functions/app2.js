function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
};

// Function for rgb() to output RGB values
Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rbg(${r}, ${g}, ${b})`;
};

// Function for hex() to output hexadecimal values
Color.prototype.hex = function () {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

// Gets RGB and Alpha values (default a=1)
Color.prototype.rgba = function (a=1) {
    const { r, g, b } = this;
    return  `rgba(${r}, ${g}, ${b}, ${a})`
};

const colorOne = new Color(40, 50, 60);
const colorTwo = new Color(0, 0, 0);

colorOne.rgba(0.5);