/**
 * Converts RGB values to hexadecimal values
 * @param {int} r Red (255)
 * @param {int} g Green (255)
 * @param {int} b Blue (255)
 * @returns Hexadecimal equivalent
 */
function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

/**
 * Returns RGB values as string
 * @param {int} r Red (255)
 * @param {int} g Green (255)
 * @param {int} b Blue (255)
 * @returns RGB values as string
 */
function rgb(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
};

hex(255, 100, 25);      // "#ff6419" 
rgb(255, 10, 25);

/**
 * Creates color from RGB values
 * @param {int} r 
 * @param {int} g 
 * @param {int} b 
 * @returns Color from RGB values
 */
function createColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    // rgb() function within createColor()
    color.rgb = function () {
        // Gets r,g,b from const color defined above
        const {r,g,b} = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
    // hex() function within createColor()
    color.hex = function () {
        // Converts RGB values from above into hexadecimal
        const {r,g,b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color
};

const colorOne = createColor(35, 255, 150);
colorOne.rgb();
colorOne.hex();