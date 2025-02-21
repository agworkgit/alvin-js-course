// Write a function `trendyText` that accepts a sentence string as an argument. The function should
// return the sentence where the last vowel of every word is removed.

// 1. Check for vowels

let isVowel = function (char) {
  let vowels = "aeiou";
  return vowels.includes(char);
};

// 2. Helper function to remove the last vowel of a word

let removeLastVowel = function (word) {
  let arr = word.split(""); // covert word to array of char

  for (let i = word.length - 1; i >= 0; i--) {
    if (isVowel(word[i])) {
      arr.splice(i, 1); // remove last vowel found
      break; // stop after removing one vowel
    }
  }

  return arr.join(""); // convert back to string
};

// 3. Main function to process sentence

let trendyText = function (string) {
  let words = string.split(" "); // split sentence into words
  let result = [];

  for (let i = 0; i < words.length; i++) {
    result.push(removeLastVowel(words[i])); // process each word
  }

  return result.join(" "); // join words back into sentence
};

console.log(trendyText("the concert will be epic")); // 'th concrt wll be epc'
console.log(trendyText("breakfast food is wonderful")); // 'breakfst fod s wonderfl'
console.log(trendyText("the weather will improve hopefully")); // 'th weathr wll improv hopeflly'
