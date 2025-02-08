let phrase = "that's all folks";

console.log(phrase[phrase.length]); // undefined
console.log(phrase.length); // 16
console.log(phrase[phrase.length - 1]); // s
console.log(phrase[phrase.length - 2]); // k

const i = 9;
const char = phrase[i];

console.log(char); // l
console.log(phrase.indexOf(char)); // 8
console.log(phrase.slice(2, 8)); // at's a

console.log('abcdefg'.slice(1, 3)); // bc
console.log('abcdefg'.slice(2)); // cdefg
console.log('abcdefg'.slice(4)); // efg
console.log('abcdefg'.slice(2, -1)); // cdef
console.log('abcdefg'.slice(2, -2)); // cde

/* 

Note:

Why is the first print undefined?
When you try to access phrase[phrase.length], it's equivalent to phrase[5], which does not exist.

*/