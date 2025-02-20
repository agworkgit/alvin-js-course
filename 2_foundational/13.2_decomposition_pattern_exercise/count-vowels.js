// Write a function countVowels(str) that accepts a string and returns the number of vowels in that string.

let countVowels = function (str)
{
    let vowels = 'aeiou';
    let counter = 0;

    // Edge case - if vowel is uppercase it won't be detected
    str = str.toLowerCase(); // Convert string to lowercase

    for (let i = 0; i < str.length; i++)
    {
        let word = str[i];

        if (vowels.includes(word))
            {
                counter++;
            }
    }

    return counter;
}

// Example Outputs

console.log(countVowels("hello world")); // 3
console.log(countVowels("JavaScript")); // 3
console.log(countVowels("WHY")); // 0