// Write a function named `fiveMultiplesOf` that accepts a number as an argument. The function should
// print out the first five multiples of the given number. The function doesn't need to return any
// value. It should just print to the terminal.

let fiveMultiplesOf = function (num)
{
    console.log('begin');
    for (let i = 1; i <= 5; i++)
    {
        let result = num * i;
        console.log(result);
        
    }
}

fiveMultiplesOf(7);
console.log('\n');

// prints
//  7
//  14
//  21
//  28
//  35

fiveMultiplesOf(3);
console.log('\n');

// prints
//  3
//  6
//  9
//  12
//  15