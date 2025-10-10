// super class for Cat and Dog classes
class Pet {
    constructor(name, age) {
        console.log("IN PET CONSTRUCTOR")
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    } 
};

// extends the Pet class with meow() method
class Cat extends Pet {
    constructor(name, age, livesleft=9) {
        console.log("IN CAT CONSTRUCTOR")
        // super() inherits the Pet class name, age variables
        super(name, age);
        this.livesleft = livesleft;
    }
    meow() {
        return "MEOW!!!";
    }
};

// extends the Pet class with bark() method
class Dog extends Pet {
    bark() {
        return "WOOF!!!";
    }
    // Overwrites the Pet class eat() method
    eat() {
        return `${this.name} scarfs down his food!`;
    }
};

class Bird extends Pet {
    chirp() {
        return "CAAAW!!!";
    }
    eat() {
        return `${this.name} pecks at his food!`;
    }
};