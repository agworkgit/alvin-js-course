// Write a function `removeLastVowel` that accepts a string as argument. The function should return
// the string with its last vowel removed. Vowels are the letters a, e, i, o, u

// 1. isVowel(char) -> determines if a char is a vowel

let isVowel = function (char) {
    let vowels = "aeiou";
    return vowels.includes(char);
  };

// 2. removeLastVowel(str) -> removes the last vowel and returns the result

let removeLastVowel = function (str)
{
    let arr = str.split(''); // covert to array

    for (let i = str.length - 1; i >= 0; i--) {
        const char = str[i];
        
        if (isVowel(char))
        {
            arr.splice(i, 1); // remove the vowel at index i
            break; // stop after removing the first vowel found from the end of the array
        }
    }

    return arr.join('');
}

// Why is the string order preserved if we are clearly iterating backwards?
// Because of splice(i, 1), which removes a character in place but does not affect the relative order of the remaining characters.

console.log(removeLastVowel("speaker")); // 'speakr'
console.log(removeLastVowel("trading")); // 'tradng'
console.log(removeLastVowel("thunder")); // 'thundr'
console.log(removeLastVowel("myth")); // 'myth'