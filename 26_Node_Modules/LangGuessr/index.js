// REMEMBER TO RUN "npm install" in your terminal (in the same directory as this file)
const franc = require("franc");
const langs = require("langs");
const colors = require("colors")

// Takes user input, use quotes for sentences
const input = process.argv[2];
// franc() detects the language of the input text
const langCode = franc(input);
// If input is too short, error message is outputted in red text
// Output without error is in green text
if (langCode === 'und') {
    console.log("ERROR, UNABLE TO FIGURE IT OUT! TRY ENTERING MORE TEXT!".red)
} else {
    const language = langs.where("3", langCode);
    console.log(`Our best guess is: ${language.name}`.green)
}

