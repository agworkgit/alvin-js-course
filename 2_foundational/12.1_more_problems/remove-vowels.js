// Write a function `removeVowels` that accepts a string as an argument. The function should return
// a version of the string where all vowels are removed.

// First attempt
/* let removeVowels = function (str)
{
    let splitStr = str.split(' ');
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = [];
    for (let i = 0; i < splitStr.length; i++)
    {
        if (!splitStr.includes(vowels[i]))
        {
            newStr.push(splitStr[i]);
        }
    }
    return newStr.join(' ');
} */

let removeVowels = function (str)
{
    let newStr = '';
    let vowels = 'aeiou';

    for (let i = 0; i < str.length; i++)
    {
        let char = str[i];
        if (!vowels.includes(char)) // if char is not included in vowels add it to newStr
        {
            newStr += char;
        }
    }

    return newStr;
}

console.log(removeVowels("jello")); // jll
console.log(removeVowels("sensitivity")); // snstvty
console.log(removeVowels("cellar door")); // cllr dr