// Write a function `makeAcronym` that accepts a sentence string as an argument. The function should
// return a string containing the first character of each word in the sentence.

let makeAcronym = function (str)
{
    let words = str.split(' ');
    let acronym = '';
    let slices = '';
    for (let i = 0; i < words.length; i++)
    {
        slices = words[i].toUpperCase();
        return slices;
    }
}

console.log(makeAcronym("New York")); // NY
console.log(makeAcronym("same stuff different day")); // SSDD
console.log(makeAcronym("Laugh out loud")); // LOL
console.log(makeAcronym("don't over think stuff")); // DOTS