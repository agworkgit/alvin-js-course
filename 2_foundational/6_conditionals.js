let number = 20;

/* 

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

console.log("before");

if (number > 0) {
  console.log("condition 1: the number is greater than 0");
} else if (number < 0) {
  console.log("condition 2: the number is less than 0");
} else {
  console.log("catch all: the number is 0");
}

console.log("after");

