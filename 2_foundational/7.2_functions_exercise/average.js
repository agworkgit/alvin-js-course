// Write a function `average` that accepts three numbers as arguments. The function should return the
// average of the three numbers.

let average = function (num1, num2, num3)
{
    let sum = num1 + num2 + num3;
    let average = sum / 3;
    return average;
}

console.log(average(3, 10, 8)); // 7
console.log(average(10, 5, 12)); // 9
console.log(average(6, 20, 40)); // 22