// Write a function `lalaLanguage` that accepts a sentence string as an argument. The function should
// return a new sentence where words longer that 3 characters are modified. Modified words should have
// each vowel followed by 'l' and the same vowel repeated again. See the examples.

// 1. Helper function to detect if char is vowel

let isVowel = function (char) 
{
    let vowels = "aeiou";
    return vowels.includes(char);
};

// 2. Helper function to modift the word

let transformWord = function (word)
{
    let result = '';

    for (let i = 0; i < word.length; i++) {
        let char = word[i];

        if (isVowel(char))
        {
            result += char + 'l' + char; // replace vowel with "vowel + 'l' + vowel"
        }
        else
        {
            result += char; // keep consonants unchanged
        }
    }

    return result;
};

// 3. Modify words in the sentence

let lalaLanguage = function (sentence)
{
    let words = sentence.split(' ');
    let transformedWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (word.length > 3)
        {
            transformedWords.push(transformWord(word));
        }
        else
        {
            transformedWords.push(word);
        }
    }
    
    return transformedWords.join(' ');
};

console.log(lalaLanguage('this is pretty strange')); // 'thilis is preletty stralangele'
console.log(lalaLanguage('can you speak our language')); // 'can you spelealak our lalangulualagele'