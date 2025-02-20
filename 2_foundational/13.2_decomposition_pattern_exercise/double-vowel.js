// Write a function `doubleVowel` that accepts a string as an argument. The function should return
// the string where every occurrence of a vowel in the original string is repeated twice consecutively.
// Vowels are the letters a, e, i, o, u.

// First attempt - okay, but not decomposition pattern
/* let doubleVowel = function (string)
{
    let vowels = 'aeiou';
    let newstr = [];

    for (let i = 0; i < string.length; i++)
    {
        let letter = string[i];
        
        newstr.push(letter); // add the current letter;

        if (vowels.includes(letter))
        {
            newstr.push(letter); // if it's a vowel, add it again
        }
    }

    return newstr.join('');
} */

// Let's break this down into two functions:

// 1. isVowel(char) -> determines if a char is a vowel

let isVowel = function (char) {
  let vowels = "aeiou";
  return vowels.includes(char);
};

// 2. doubleVowel(string) -> loops through string and builds the new string with doubled vowels

let doubleVowel = function (string) {
  let result = [];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    result.push(char); // add current character

    if (isVowel(char)) {
      result.push(char); // add extra copy if it's a vowel
    }
  }

  return result.join("");
};

console.log(doubleVowel("runner")); // 'ruunneer'
console.log(doubleVowel("stoplight")); // 'stoopliight'
console.log(doubleVowel("gardener")); // 'gaardeeneer'
