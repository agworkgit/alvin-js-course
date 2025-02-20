// Write a function reverseOddWords

// Accepts a sentence string as an argument.
// Returns a new sentence where every other word (odd-indexed) is reversed.
// Words are separated by spaces, and the sentence structure remains intact.

// Function to reverse words - reverse iteration
let reverseWord = function (word) {
  let reverse = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  return reverse;
};

// Function to process the sentence - if even push as is, if odd push reversed
let reverseOddWords = function (sentence) {
  let words = sentence.split(" ");
  let newSentence = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (i % 2 === 0) {
      newSentence.push(word); // push current word
    } else {
      newSentence.push(reverseWord(word)); // push reversed word
    }
  }

  return newSentence.join(" ");
};

// Example outputs

console.log(reverseOddWords("hello world this is fun"));
// Output: "hello dlrow this si fun"

console.log(reverseOddWords("keep practicing to get better at programming"));
// Output: "keep gnicitcarp to teg better ta programming"

console.log(reverseOddWords("code every day"));
// Output: "code yreve day"

// console.log(reverseWord("code"));
