// Write a function `minToMax(min, max)` that accepts two numbers as arguments. The function should
// print all numbers from min to max inclusive. The function doesn't need to return any value. It
// should just print to the terminal.

let minToMax = function (min, max)
{
    for (let i = min; min <= max; min++)
    {
        console.log(min);
    }
}

minToMax(5, 9);
console.log('\n');
// prints
//  5
//  6
//  7
//  8
//  9

minToMax(11, 13);
console.log('\n');
// prints
//  11
//  12
//  13

minToMax(20, 11);
console.log('\n');