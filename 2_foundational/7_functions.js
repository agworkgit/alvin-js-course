/* 

Functions are constructs that allow programmers to group multiple statements together into a single logical unit. Functions may take arguments as input and return some value as output. 

*/

/* function getAverage(x, y)
{
    return ((x + y) / 2);
}

console.log(getAverage(40, 120)); */

console.log('\n');

// EXAMPLE 1

// Function definition
let functionTest = function() {
    console.log('i am a function');
    console.log('ending function');
};

// Function call
console.log('one'); // starts here
functionTest(); // jumps into the function to run the code there
console.log('two'); // comes back here

// EXAMPLE 2

let calculateAverage = function (num1, num2) // these get replaced by actual values below in the function call
{
    let sum = num1 + num2;
    let average = sum / 2;
    return average; // to function exits here
    // no code down here will run
}

// Check operation order

console.log('\n'); // newline
console.log('a'); // first
console.log(calculateAverage(31, 70)); // we pass in values for num1, num2 // avg = 50.5
console.log('b'); // third
console.log(calculateAverage(12, 44)); // avg = 28
console.log('c'); // last

// Re-using the return value of a function
let result = calculateAverage(10, 15);
console.log(result + 2); // = 14.5

// EXAMPLE 3

let yellOrWhisper = function (str) // str is a parameter of the function
{
    // TODO : if we get a long string return UPPERCASE if long than 4 characters if shorter return lowercase
    if (str.length > 4) {
        return str.toUpperCase();
    } else {
        return str.toLowerCase();
    }
}

console.log('\n');
console.log(yellOrWhisper('exCellEnt')); // 'exCellEnt' is the argument going into the function (the value replacing the placeholder)
console.log(yellOrWhisper('taNK'));
console.log('\n');
