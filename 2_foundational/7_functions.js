/* 

Functions are constructs that allow programmers to group multiple statements together into a single logical unit. Functions may take arguments as input and return some value as output. 

*/

/* function getAverage(x, y)
{
    return ((x + y) / 2);
}

console.log(getAverage(40, 120)); */

// EXERCISE 1

// Function definition
let functionTest = function() {
    console.log('i am a function');
    console.log('ending function');
};

// Function call
console.log('one'); // starts here
functionTest(); // jumps into the function to run the code there
console.log('two'); // comes back here

// EXERCISE 2

let calculateAverage = function (num1, num2) // these get replaced by actual values below in the function call
{
    let sum = num1 + num2;
    let average = sum / 2;
    console.log(average);
}

// Check operation order

console.log('\n'); // newline
console.log('a'); // first
calculateAverage(31, 70); // we pass in values for num1, num2 // avg = 50.5
console.log('b'); // third
calculateAverage(12, 44); // avg = 28
console.log('c'); // last


