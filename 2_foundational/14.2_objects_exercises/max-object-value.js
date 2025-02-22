// Write a function `maxObjectValue` that accepts an object as an argument. Write a function that
// returns an array containing the key, value pair for the largest value within the object. You can
// assume that all values are numbers and there are no ties.

let maxObjectValue = function (obj)
{
    let maxKey = ''; // to hold the max val
    let maxValue = -Infinity; // start with the lowest possible value

    let keys = [];
    for (let i = 0; i < Object.keys(obj).length; i++) {
        keys.push(Object.keys(obj)[i]); // populate the keys array
    }

    // loop through the keys using a classic for loop
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i]; // get the current key

        if (obj[key] > maxValue)
        {
            maxValue = obj[key]; // update maxValue
            maxKey = key; // update maxKey
        }
    }

    // return the result as an array [key, value]
    return [maxKey, maxValue];
}

console.log(maxObjectValue({ a: 5, b: 2, c: 6, d: 7, e: 4 })); // ['d', 7]
console.log(maxObjectValue({ lychee: 11, rambutan: 13, papaya: 9 })); // ['rambutan', 13]