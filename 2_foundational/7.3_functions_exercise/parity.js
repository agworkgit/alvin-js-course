// Write a function `parity` that accepts a number as an argument. The function should return the
// string 'even' if the number is even. It should return the string 'odd' if the number is odd.

let parity = function (num)
{
    if (num % 2 === 0) {
        return 'even'; // don't console log this, it will return undefined, return is fine
    } else {
        return 'odd';
    }
}

console.log(parity(5)); // 'odd'
console.log(parity(7)); // 'odd'
console.log(parity(13)); // 'odd'
console.log(parity(32)); // 'even'
console.log(parity(10)); // 'even'
console.log(parity(602348)); // 'even'

/* 

Note:

In JavaScript, if a function does not return a value, it implicitly returns undefined.

*/