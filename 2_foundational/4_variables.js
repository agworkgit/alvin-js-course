/* 

Variables

*/

let colour = 'green';
console.log(`Value of colour: ${colour}`);

let number = 42;
console.log(`Value of number: ${number + 3}`);

let counter = 0;
console.log('Initial value: ' + counter);
counter++;
console.log('Incremented value: ' + counter);

// Variables can be declared but unassigned until later e.g. below

let i;
console.log(i); // this will come up as "undefined"
i = 100; // we now assign a value to the already declared variable
console.log(i); // logs 100

// Throwing a ReferenceError - this will appear when we reference undefined variables
/* console.log(notdefinedyet); */

let isEven = 51 % 2 === 0;
console.log(isEven); // false

/* 

Note:

Variables are declared with the keyword: var (not much used, polutes global scope), let, and const for values that won't or shouldn't be changed

= | means assignment
`${insert variable or function call directly into this literal}` | template literal

+= | addition assignment shorthand
-= | subtraction assignment shorthand
/= | division assignment shorthand
*= | multiplication assignment shorthand
++ | increment shorthand (counter + 1);
-- | decrement

*/