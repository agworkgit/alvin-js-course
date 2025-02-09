// Write a function `evens(max)` that accepts a max number as an argument. The function should print
// all positive even numbers that are less than the max.

let evens = function (max)
{
    for (let i = 1; i < max; i++)
    {
        if (i % 2 === 0) {
            console.log(i);
        } else {
            // do nothing
        }
    }
}

evens(11);
console.log('\n');

// prints
//  2
//  4
//  6
//  8
//  10

evens(8);
console.log('\n');

// prints
//  2
//  4
//  6