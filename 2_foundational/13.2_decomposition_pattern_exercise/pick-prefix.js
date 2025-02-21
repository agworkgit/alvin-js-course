// Write a function `pickPrefix(strings, prefix)` that accepts an array of strings and a prefix string 
// as an argument. The function should return an array of words that begin with the prefix.

// 1. Helper function to check if a word starts with the prefix

let startsWith = function (word, prefix)
{
    for (let i = 0; i < prefix.length; i++) {
        if (word[i] !== prefix[i])
        {
            return false; // if any character doesn't match, return false
        }
    }
    return true; // if all characters match, it's a prefix
}

// 2. Check strings and return matches

let pickPrefix = function(strings, prefix)
{
    let result = []; // empty array to store matches

    for (let i = 0; i < strings.length; i++) { // loop through words
        let word = strings[i];

        if (startsWith(word, prefix)) // use helper function to check
        {
            result.push(word); // if it matches, push to result
        }
    }

    return result;
}

console.log(pickPrefix(['connect', 'company', 'concert', 'cram'], 'con'));
// ['connect', 'concert']

console.log(pickPrefix(['miner', 'mistake', 'misspeak', 'moose', 'mission'], 'mis'));
// [''mistake', 'misspeak', 'mission']