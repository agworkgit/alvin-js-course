// Write a function `maximum` that accepts an array of numbers as an argument. The function should 
// return the largest number of the array. If the array is empty, then the function should return null.

let maximum = function (array)
{
    if (array.length === 0)
    {
        return null;
    }

    let currentMax = array[0];
    for (let i = 1; i < array.length; i++)
    {
        if (array[i] > currentMax) // if i find a number bigger than currentMax
        {
            currentMax = array[i]; // replace currentMax with biggest number
        }
    }
    return currentMax;
}

console.log(maximum([5, 6, 3, 7])); // 7
console.log(maximum([17, 15, 19, 11, 2])); // 19
console.log(maximum([])); // null