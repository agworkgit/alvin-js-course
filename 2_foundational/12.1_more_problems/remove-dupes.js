// Write a function `removeDupes` that accepts an array as an argument. The function should return a
// new array where each element only appears once.

// First attempt
/* let removeDupes = function (array)
{
    let uniques = []; // create empty array
    for (let i = 0; i < array.length; i++) // iterate over array
    {
        let pointer1 = array[i]; // set pointer1 to be elem i
        
        for (let j = i + 1; j < array.length; j++) // iterate over array starting at i + 1
        {
            let pointer2 = array[j]; // set pointer2 to be elem i+1

            if (pointer1 === pointer2) // if pointer1 is not equal to pointer 2
                {
                    uniques.push(pointer1); // push pointer1
                }
                else
                {
                    uniques.push(pointer2) // push pointer2
                }
        }
    }
    return uniques;
    // return an array without duplicates
} */

// Walkthrough

let removeDupes = function (array)
{
    let uniques = [];

    for (let i = 0; i < array.length; i++)
    {
        let pointer = array[i];

        if (!uniques.includes(pointer)) // if uniques doesn't include pointer only then push pointer, when the pointer in the array we don't push it in again
        {
            uniques.push(pointer);
        }
    }

    return uniques;
}

console.log(removeDupes(["x", "y", "y", "x", "z"])); // ['x', 'y', 'z']
console.log(removeDupes([false, false, true, false])); // [false, true]
console.log(removeDupes([42, 5, 7, 42, 7, 3, 7, 7])); // [42, 5, 7, 3]