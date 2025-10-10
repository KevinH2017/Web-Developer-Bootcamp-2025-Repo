const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}


const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log("THIS IS:", this)
        console.log(`${this.name} says MEOWWWW`);
    }
}

const noise = cat.meow;
console.log(noise);
console.log(noise())

const square = {
    area(side) {
        return side * side;
    },
    perimeter(side) {
        return side * 4;
    }
};

console.log(square.area(5));
console.log(square.perimeter(2));