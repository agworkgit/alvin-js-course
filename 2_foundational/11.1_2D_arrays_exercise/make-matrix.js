// Write a function `makeMatrix(m, n, value)` that accepts three arguments. The function should return
// a 2-dimensional array of height `m` and width `n` that contains the `value` as every element.

let makeMatrix = function (m, n, value) {
  let array = []; // start with empty array

  for (let i = 0; i < m; i++) { // iterate m times
    let subarray = []; // empty subarray

    for (let j = 0; j < n; j++) { // iterate n times
      subarray.push(value); // push calue to subarray every iteration
    }
    array.push(subarray); // push subarray into empty array
  }

  return array; // returns the values in the examples
};

console.log(makeMatrix(3, 5, null));
// [
//   [ null, null, null, null, null ],
//   [ null, null, null, null, null ],
//   [ null, null, null, null, null ]
// ]

console.log(makeMatrix(4, 2, "x"));
// [
//   [ 'x', 'x' ],
//   [ 'x', 'x' ],
//   [ 'x', 'x' ],
//   [ 'x', 'x' ]
// ]

console.log(makeMatrix(2, 2, 0));
// [
//   [ 0, 0 ],
//   [ 0, 0 ]
// ]
