// Write a function `removeFirstVowel` that accepts a string as an argument. The function should return
// the string with it's first vowel removed.

let removeFirstVowel = function (str) {
  let vowels = 'aeiou';

  for (let i = 0; i < str.length; i++) { // iterate from left to right through characters
    let char = str[i]; // assign character to char

    if (vowels.includes(char)) // if vowels includes vowel in char return true
    {
        return str.slice(0, i) + str.slice(i + 1); // the logic found the first vowel, so return str without that character plus the rest of the string
    }
  }
};

console.log(removeFirstVowel("volcano")); // 'vlcano'
console.log(removeFirstVowel("celery")); // 'clery'
console.log(removeFirstVowel("juice")); // 'jice'
