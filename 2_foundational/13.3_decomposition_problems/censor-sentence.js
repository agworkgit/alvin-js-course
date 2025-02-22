// Write a function `censorSentence(sentence, targetWords)` that accepts a sentence string and an array
// of target words as arguments. The function should return a new sentence where any target words 
// have all of their characters replaced with '*'s.

// 1. Helper function to censor a word

let censorWord = function (word)
{
    return '*'.repeat(word.length);
};

// 2. Process each word in the sentence

let censorSentence = function (sentence, targetWords)
{
    let words = sentence.split(' ');
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        
        if (targetWords.includes(word))
        {
            result.push(censorWord(word)); // replace with star
        }
        else
        {
            result.push(word); // keep the word unchanged
        }
    }

    return result.join(' ');
};

console.log(censorSentence('where the heck is my celery', ['heck', 'celery'])); 
// 'where the **** is my ******'

console.log(censorSentence('why you little sweetheart', ['sweetheart', 'salad'])); 
// 'why you little **********'