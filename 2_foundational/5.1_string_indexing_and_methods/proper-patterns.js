let word = 'suspension bridge';
console.log(word[4]); // e
console.log(word.length > 5 && word[0] === 'd'); // 17 > 5 == false && 's' === 'd' --> false
console.log(word.length > 5 && word[0] === 's'); // 17 > 5 == false && 's' === 's' --> true
console.log(word.indexOf('o') > -1); // 8 > -1 --> true
console.log(word.indexOf('z') > -1); // -1 > -1 --> false

let str = 'foggy';
console.log(str[2 + 1]); // g
console.log(str[str.length -1]); // y
str = 'day';
console.log(str); // day
console.log(str.length); // 3
console.log(str.indexOf('ogg')); // -1

// PREDICTED CORRECTLY