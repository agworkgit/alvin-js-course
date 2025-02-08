// Write a function `averageOfFour(num1, num2, num3, num4)` that accepts four numbers as arguments. The
// function should return the average of all four numbers.

let averageOfFour = function (num1, num2, num3, num4)
{
    let sum = num1 + num2 + num3 + num4;
    let average = sum / 4;
    return average;
}

console.log(averageOfFour(10, 4, 12, 3)); // 7.25
console.log(averageOfFour(-20, 50, 4, 21)); // 13.75
console.log(averageOfFour(10, 4, 12, 3)); // 7.25
console.log(averageOfFour(5, 5, 3, 7)); // 5