// Write a function `funnyPhrase` that accepts a sentence string as an argument. The function should
// return the sentence where every other word has its vowels repeated twice consecutively.
// Vowels are the letters a, e, i, o, u.

// Break this down into decomposition patterns

// isVowel(char) -> Checks if a character is a vowel (already correctly implemented).
// doubleVowels(word) -> Takes a word and returns a new version where vowels are doubled.
// funnyPhrase(sentence) -> Splits the sentence into words, modifies every other word using doubleVowels(), then joins it back.

// Helper function to check if a character is a vowel
let isVowel = function (char)
{
    let vowels = 'aeiou';
    return vowels.includes(char);
}

// Helper function to double the vowels in a word
let doubleVowels = function (word)
{
    let newWord = [];

    for (let i = 0; i < word.length; i++)
    {
        let char = word[i];

        newWord.push(char); // push current character

        if (isVowel(char))
        {
            newWord.push(char); // push extra vowel
        }
    }

    return newWord.join(''); // return new string
}

// Main function that applies doubleVowels() to every other word
let funnyPhrase = function (sentence)
{
   let words = sentence.split(' '); // split sentence into words

   for (let i = 0; i < words.length; i++)
   {
        if (i % 2 === 1) // modify every other word (index - 1, 3, 5,...)
        {
            words[i] = doubleVowels(words[i]);
        }
   }

   return words.join(' '); // reconstruct the sentence
}

console.log(funnyPhrase("she dreamed of being a runner")); // 'she dreeaameed of beeiing a ruunneer'
console.log(funnyPhrase("park near the stoplight")); // 'park neeaar the stoopliight'
console.log(funnyPhrase("we need many gardeners")); // 'we neeeed many gaardeeneers'