// Write a function `stayPositive` that accepts an array of numbers as an argument. The function should
// return an array containing only the positive numbers.

let stayPositive = function (array)
{
    let posArr = [];
    for (let i = 0; i < array.length; i++)
    {
        if (array[i] > 0) {
           posArr.push(array[i]);
        }
    }
    return posArr;
}

console.log(stayPositive([10, -4, 3, 6])); // [10, 3, 6]
console.log(stayPositive([-5, 11, -40, 30.3, -2])); // [11, 30.3]
console.log(stayPositive([-11, -30])); // []