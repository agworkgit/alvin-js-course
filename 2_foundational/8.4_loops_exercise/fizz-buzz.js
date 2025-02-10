import { styleText } from 'node:util';

// Write a function `fizzBuzz` that accepts a max number as an argument. The function should
// print all numbers less than or equal to max that are divisible by either 3 or 5 but not both 3
// and 5. The function doesn't need to return any value. It should just print to the terminal.

let fizzBuzz = function (max)
{
    for (let i = 0; i <= max; i++)
    {
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0))
        {
            console.log(styleText('green','fizz: ' + i));
        } else {
            console.log(styleText('red','buzz: ' + i));
        }
    }
}

console.log('\n');
fizzBuzz(18);
console.log('\n');

// prints
//  3
//  5
//  6
//  9
//  10
//  12
//  18

fizzBuzz(33);
console.log('\n');

// prints
//  3
//  5
//  6
//  9
//  10
//  12
//  18
//  20
//  21
//  24
//  25
//  27
//  33

/* 
Note:

Learned about nodeJS text colour changes through node-util built-in library here
https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
*/