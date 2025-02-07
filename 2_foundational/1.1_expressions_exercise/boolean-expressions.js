/* 

Topic 1 exercises - Boolean expressions

*/

console.log(false); // false
console.log(!true); // false
console.log(!false); // true
console.log(!!true); // true
console.log("\n");

console.log(false && false); // false
console.log(false && true); // false
console.log(true && false); // false
console.log(true && true); // true
console.log("\n");

console.log(false || false); // false
console.log(false || true); // true
console.log(true || false); // true
console.log(true || true); // true
console.log("\n");

console.log(!false || false); // true
console.log(false || (true && true)); // true
console.log(false || !(true && true)); // false
console.log(!true && (false || true)); // false

console.log("\n");

// Predictions correct

/* 

Note:

Well done you predicted all of it correctly

*/