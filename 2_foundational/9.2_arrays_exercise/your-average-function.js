// Write a function `yourAverageFunction` that accepts an array of numbers as an argument. The
// function should return the average of all elements of the array. If the input array is empty,
// then the function should return null.

let yourAverageFunction = function (array) {
  if (array.length < 1) {
    return null;
  }
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i] / array.length;
  }
  return total;
};

console.log(yourAverageFunction([5, 2, 7, 24])); // 9.5
console.log(yourAverageFunction([100, 6])); // 53
console.log(yourAverageFunction([31, 32, 40, 12, 33])); // 29.6
console.log(yourAverageFunction([])); // null
