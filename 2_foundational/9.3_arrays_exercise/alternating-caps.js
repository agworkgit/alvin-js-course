// Write a function `alternatingCaps` that accepts a sentence string as an argument. The function should
// return the sentence where words alternate between lowercase and uppercase.

let alternatingCaps = function (string)
{
    let words = string.split(' '); // split string into array
    let alternating = []; // emtpy array to add alternated stings

    for (let i = 0; i < words.length; i++)
    {      
        let word = words[i];
        if (i % 2 === 1) // compare if i is even or odd
        {
            alternating.push(word.toUpperCase());
        } else {
            alternating.push(word.toLowerCase());
        }
    }
    return alternating.join(' '); // join back into string
}

console.log(alternatingCaps("take them to school")); // 'take THEM to SCHOOL'
console.log(alternatingCaps("What did ThEy EAT before?")); // 'what DID they EAT before?'