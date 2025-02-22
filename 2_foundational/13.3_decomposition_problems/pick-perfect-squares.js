// Write a function `pickPerfectSquares` that accepts an array of numbers as an argument. The function 
// should return an array containing only the elements that are perfect squares. A perfect square
// is a number that can result from multiplying some number by itself.
//
// For example, 4 is a perfect square because 2 * 2 = 4
// For example, 81 is a perfect square because 9 * 9 = 81

// 1. Helper function to check for perfect square
// A number n is a perfect square if the square root of n is a whole number (i.e., has no decimal places).

let isPerfectSquare = function (num)
{
    let sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt); // true if sqrt has no decimals, or perfect
}

// 2. Process the array

let pickPerfectSquares = function (arr)
{
    let results = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        
        if (isPerfectSquare(num))
        {
            results.push(num);
        }
    }

    return results;
};

console.log(pickPerfectSquares([6, 4, 81, 21, 36])); // [4, 81, 36]
console.log(pickPerfectSquares([100, 24, 144])); // [100, 144]
console.log(pickPerfectSquares([30, 25])); // [25]