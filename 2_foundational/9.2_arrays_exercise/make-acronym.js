// Write a function `makeAcronym` that accepts a sentence string as an argument. The function should
// return a string containing the first character of each word in the sentence.

let makeAcronym = function (str)
{
    let words = str.split(' '); // split words into array
    let acronym = '';
    for (let i = 0; i < words.length; i++)
    {
        acronym += words[i][0]; // take 1st char of every word
    }
    return acronym.toUpperCase(); // return it uppercased
}

console.log(makeAcronym("New York")); // NY
console.log(makeAcronym("same stuff different day")); // SSDD
console.log(makeAcronym("Laugh out loud")); // LOL
console.log(makeAcronym("don't over think stuff")); // DOTS