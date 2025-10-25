// Generates an array of dice rolls as integers

// Returns random integer: [1..6]
function d6() {
  return Math.floor(Math.random() * 6) + 1;
}

// Returns n rolls => [num, ...]
function getRolls(n) {
  return Array.from({ length: n }, () => d6());
}

// Returns sum of nums
function sum(nums) {
  return nums.reduce((prev, cur) => prev + cur, 0);
}

// Exports functions for use
export { d6, getRolls, sum };
