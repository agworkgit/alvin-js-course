// Write a function `numOdds` that accepts an array of numbers as an argument. The function should
// return a number representing the count of odd elements in the array.

let numOdds = function (arr) {
  let sum = 0; // counter for no of odd elements

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) { // filter odd elements
      sum += 1; // sum up odd elements
    }
  }
  return sum; // return the sum
};

console.log(numOdds([4, 7, 2, 5, 9])); // 3
console.log(numOdds([11, 31, 58, 99, 21, 60])); // 4
console.log(numOdds([100, 40, 4])); // 0
