// Write a function `wordCount(sentence, targetWords)` that accepts a sentence string and an array of
// `targetWords`. The function should return a count of the number of words of the sentence that are
// in `targetWords`.

let wordCount = function (sentence, targetWords)
{
    let words = sentence.split(' '); // split string contents into array items
    let count = 0;
    for (let i = 0; i < words.length; i++)
    {
        let word = words[i];
        if (targetWords.includes(word))
        {
            count++;
        }
    }
    return count;
}

console.log(wordCount("open the window please", ["please", "open", "sorry"])); // 2
console.log(wordCount("drive to the cinema", ["the", "driver"])); // 1
console.log(wordCount("can I have that can", ["can", "I"])); // 3

// Where did you get stuck?
// I was trying to manually find a method to compare two arrays, however there already exists a method called includes
// that we can use to deduce that.

// Solved the exercise but needed the walkthrough to finish it