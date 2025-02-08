// A conditional is a construct that allows programmers to execute different code dependent on the value of a boolean expression.

/* 

Notes:

Basic structure of a conditional

if (condition) {
    code to execute;
}

Intermmediate structure of a conditional

if (condition1) {
    code to execute;
} else if (condition1) {
    code to execute;
} else {
    code to execute;
}

Ternary operator

condition ? expression 1 : (else) expression 2
if this condition is met ? print this : else print this

Example:

console.log((age >= 18) ? 'You are an adult!' : 'You are a kid.');

*/

// EXAMPLE 1

let number = 20;

// add a new line for readability
console.log('\n');

// prints first
console.log("before");

// condition is checked top down and result printed
if (number > 0) {
    console.log("condition 1: the number is positive");
  } else {
    console.log("condition 2: the number is negative");
  }

if (number % 2 === 0) {
  console.log("condition 3: the number is even");
} else {
  console.log("condition 4: the number is odd");
}

// prints last
console.log("after");

// add a new line for readability
console.log('\n');

// EXAMPLE 2

let word = 'javascript';

if (word.length > 3) {
    console.log('long name');
} else {
    console.log('short name');
    
}

// add a new line for readability
console.log('\n');

if (word[0] === 'a') {
    console.log('word STARTS with a');
} else {
    console.log('word does NOT START with a');
}

// add a new line for readability
console.log('\n');