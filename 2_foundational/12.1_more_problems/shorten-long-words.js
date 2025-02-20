// Write a function `shortenLongWords` that accepts a sentence string as an argument. The function
// should return the same sentence where words longer than 4 characters have their vowels removed.

// First attempt - total failure
/* let shortenLongWords = function (str) {
  let vowels = "aeiou";
  let newstr = str.split(" ");
  let shortstr = [];

  for (let i = 0; i < newstr.length; i++) {
    // iterate string
    let word = newstr[i]; // assign words

    if (word.length > 4) {
      for (let j = 0; j < word.length; j++) {
        let char = word[j];

        if (!vowels.includes(char)) {
          console.log(word);
        }
      }
    }
  }
}; */

// Helper function

let removeVowels = function (str) {
  let newStr = "";
  let vowels = "aeiou";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!vowels.includes(char)) {
      // if char is not included in vowels add it to newStr
      newStr += char;
    }
  }

  return newStr;
};

// This needs the helper function to work

let shortenLongWords = function (sentence) {
  let words = sentence.split(" ");
  let newWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 4) {
      let noVowels = removeVowels(word); // gives back same string with no vowels
      newWords.push(noVowels);
    } else {
      newWords.push(word);
    }
  }

  return newWords.join(" ");
};

console.log(shortenLongWords("they are very noble people")); // 'they are very nbl ppl'
console.log(shortenLongWords("stick with it")); // 'stck with it'
console.log(shortenLongWords("ballerina, you must have seen her")); // 'bllrna, you must have seen her'
