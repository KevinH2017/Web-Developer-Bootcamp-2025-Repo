let userInput = prompt('Enter a command:');
const todosArray = ['Cook Eggs', 'Buy Milk'];
while(userInput != 'quit' && userInput != 'q') {
    if (userInput === 'list') {
        console.log('*****************');
        for (let i = 0; i < todosArray.length; i++) {
            console.log(`${i+1}: ${todosArray[i]}`);                // i+1, to account for zero-based indexing
        }
        console.log('*****************');
    } else if (userInput === 'new') {
        const newInput = prompt('Enter new todo:');
        todosArray.push(newInput);
        console.log(`${newInput} has been added to the list!`);
    } else if (userInput === 'delete') {
        const index = parseInt(prompt('Enter item index to delete:'));
        if (!Number.isNaN(index)) {
            const deletedItem = todosArray.splice(index-1,1);           // index-1, to account for zero-based indexing
            console.log(`Deleted ${deletedItem[0]}`);
        } else {
            console.log('Unkown index');
        }
    }
    userInput = prompt('Enter a command:');

}
console.log("EXITING THE APP...");