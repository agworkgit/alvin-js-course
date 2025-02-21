// Write a function `mostLetterWord` that accepts a sentence string and a character as arguments.
// The function should return the word of the sentence that contains the character the most number
// of times. You can assume that the sentence contains at least one word. If there is a tie, return
// the word that appears earlier in the sentence.

// 1. Helper function to count ocurrances of char in a word

let countLetter = function (word, char) {
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
      // if letter equal to character
      count++; // increment the count
    }
  }

  return count; // return the total count of the character in the word
};

// 2. Main function to find the word with most occurrances of the given char

let mostLetterWord = function (sentence, char) {
  let words = sentence.split(" "); // split sentence into words
  let maxCount = 0; // keep track of highest count
  let resultWord = ""; // store the word with highest count

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let count = countLetter(word, char); // count occurrances of char

    if (count > maxCount) {
      // if this word has more ocurrances
      maxCount = count;
      resultWord = word; // update the result word
    }
  }

  return resultWord; // return the word with most occurrances
};

console.log(mostLetterWord("she received an award for excellence in science", "e")); // 'excellence'
console.log(mostLetterWord("she received an award for excellence in science", "a")); // 'award'
console.log(mostLetterWord("I hope sophomore year comes soon", "o")); // 'sophomore'
console.log(mostLetterWord("I hope sophomore year comes soon", "s")); // 'sophomore'
