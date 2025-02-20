// Write a function `removeFirstVowel` that accepts a string as an argument. The function should return
// the string with it's first vowel removed.

let removeFirstVowel = function (str) {
  let vowels = "aeiou";
  let newstr = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    newstr += char;
  }

  return newstr;
};

console.log(removeFirstVowel("volcano")); // 'vlcano'
console.log(removeFirstVowel("celery")); // 'clery'
console.log(removeFirstVowel("juice")); // 'jice'
