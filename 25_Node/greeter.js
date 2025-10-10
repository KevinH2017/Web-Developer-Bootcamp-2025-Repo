// Run in terminal with arguments, can take multiple arguments
const args = process.argv.slice(2);
for (let arg of args) {
    console.log(`Hi there, ${arg}`)
}

