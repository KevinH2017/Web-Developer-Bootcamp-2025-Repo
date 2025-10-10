// Gets the dictionary data from blue, sadie, and janet files
const blue = require('./blue')
const sadie = require('./sadie')
const janet = require('./janet')

// Puts all data into a list
const allCats = [blue, sadie, janet]

// Exports the variable allCats when folder shelter is called
module.exports = allCats;