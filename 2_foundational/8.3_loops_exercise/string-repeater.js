// Write a function named `stringRepeater(str, num)` that accepts a string and a number as arguments.
// The function should return a new string consisting of the `str` repeated `num` number of times.

let stringRepeater = function (str, num)
{
    let newstr = '';
    for (let i = 0; i < num; i++)
    {
        newstr += str;
    }
    return newstr;
}

console.log(stringRepeater("q", 4)); // 'qqqq'
console.log(stringRepeater("go", 2)); // 'gogo'
console.log(stringRepeater("tac", 3)); // 'tactactac'

/*
WHERE DID YOU GET STUCK?

For some reason I was trying to multiply str[i] by num.
After some console logs I realised that I was creating an invalid operation.
Finally I solved it by understanding how to sum up the iteration in the newstr variable.
*/