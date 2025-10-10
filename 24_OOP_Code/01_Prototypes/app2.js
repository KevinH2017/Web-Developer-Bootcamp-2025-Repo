// Creates unique method for strings called yell()
String.prototype.yell = function () {
    return `${this.toUpperCase()}!!! AAAA!!!!`;
};

// Unique method that overwrites the existing pop() method
Array.prototype.pop = function () {
    return "I WILL NOT POP THE ELEMENT!";
};

const nums = [1,2,3,4];
nums.pop()      // Old pop() method is overwritten by the new above pop() method