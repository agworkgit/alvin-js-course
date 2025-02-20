// Write a function `removeFirstVowel` that accepts a string as an argument. The function should return
// the string with it's first vowel removed.

let removeFirstVowel = function (str) {
  let vowels = 'aeiou';

  for (let i = 0; i < str.length; i++) { // iterate from left to right through characters
    let char = str[i]; // assign character to char

    if (vowels.includes(char)) // if vowels includes vowel in char return true
    {
        return str.slice(0, i) + str.slice(i + 1); // the logic found the first vowel, so return str without that character plus the rest of the string
        //             ^       +        ^
        //              v               lcano
        //  first instance of 'o' will be removed by the left hand slice
    }
  }
  return 'no vowels in the given string'; // this will run when the if statement returns undefined.
};

// Note: the slice method will go up to the second argument but not including it

console.log(removeFirstVowel("volcano")); // 'vlcano'
console.log(removeFirstVowel("celery")); // 'clery'
console.log(removeFirstVowel("juice")); // 'jice'

console.log(removeFirstVowel("try")); // this will return undefined, as at no point in time the if statement will be true
