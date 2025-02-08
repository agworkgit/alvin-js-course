/* 

Indexing

A string consists of one or more characters. An index is a number that corresponds to the position of a character in a string. The first character of a string has index 0, the second character has index 1, and so on. Indexing is a pattern that programmers use often in strings. This pattern will also appear later in more advanced applications.

*/

console.log('marker'[0]); // prints only m which is the 0th index of the string

let str = 'cats';
console.log(str[5]); // prints o
console.log(str[6]); // undefined, index is past the available indices in string
console.log(str[str.length - 1]); // last character in the string
console.log(str.indexOf('a')); // 'a' can be found at index 1
console.log(str.indexOf('x')); // this will return -1, meaning the 'x' character does not exist in the current string of 'cats'
console.log(str.indexOf('at')); // we get the index of where the first character of the substring starts

let sentence = "Hi everybody! How are you doing?";
console.log(sentence.indexOf('every') > -1); // true if found in the sentence, otherwise false
console.log(sentence.indexOf('flat') > -1); // false, not found in the sentence, -1 > -1 = false

let myString = 'qrstu';
console.log(myString[1]);

// Getting a portion of a string
console.log(myString.slice(2)); // slice past index 2, stu
let subStr = myString.slice(1, 3); // starting index is inclusive, ending index is exclusive
console.log(subStr); // rs

// Slice will also accept negative numbers, refering to counting backwards (front the end of the string)
let newString = 'negativecount';
let newSubStr = newString.slice(-2);
console.log(newSubStr);  // nt

/* 

Note:


*/