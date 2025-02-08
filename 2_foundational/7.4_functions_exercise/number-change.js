// Write a function `numberChange` that accepts a number as an argument. The function should return
// half the number if it is even. The function should return double the number if it is odd.

let numberChange = function (num)
{
    if (num % 2 === 0) {
        return num / 2; // even half
    } else {
        return num * 2; // odd double
    }
}

console.log(numberChange(6)); // 3
console.log(numberChange(7)); // 14
console.log(numberChange(16)); // 8
console.log(numberChange(21)); // 42