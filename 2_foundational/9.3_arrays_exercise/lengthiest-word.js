// Write a function `lengthiestWord` that accepts a sentence string as an argument. The function should
// return the longest word of the sentence. If there is a tie, return the word that appears later 
// in the sentence.

let lengthiestWord = function (string)
{
    let words = string.split(' '); // splits string into idividual words
    let longest = words[0]; // sets default comparison point

    for (let i = 1; i < words.length; i++) // iterate words
    {
        let word = words[i];
        if (word.length >= longest.length) // return the word later in the sentence
        {
            longest = word;
        }
    }
    return longest
}

console.log(lengthiestWord("I am pretty hungry")); // 'hungry'
console.log(lengthiestWord("we should think outside of the box")); // 'outside'
console.log(lengthiestWord("down the rabbit hole")); // 'rabbit'
console.log(lengthiestWord("simmer down")); // 'simmer'