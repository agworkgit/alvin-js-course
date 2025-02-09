// Write a function `stringIterate` that accepts a string as an argument. The function should print out
// each character of the string, one by one. The function doesn't need to return any value. It should
// just print to the terminal.

let stringIterate = function (str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
};

stringIterate("celery");
console.log('\n');

// prints
//  c
//  e
//  l
//  e
//  r
//  y

stringIterate("hat");
console.log('\n');

// prints
//  h
//  a
//  t
