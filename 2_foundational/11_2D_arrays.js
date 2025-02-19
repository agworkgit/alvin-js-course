// A two-dimensional array (nested array) is an array that contains other arrays as elements. 
// Programmers use multidimensional arrays when dealing with data that has many layers. 
// It is also useful to represent a grid space, or matrix.

let array = [
    ['a','b'],
    ['c','d','e'],
    ['f','g','h']
];

let subArr1 = array[0]; // [ 'a', 'b' ]
let subArr2 = array[1]; // [ 'c', 'd', 'e' ]
let subArr3 = array[2]; // [ 'f', 'g', 'h' ]

// Different methods to access data

// console.log(subArr2[2]); // e
// console.log(array[1][2]); // e

let str = ''; // variable to store a string of all elements in the subArray

for (let i = 0; i < array.length; i++)
{
    let subArray = array[i]; // assigned to variable for clarity
    // console.log(array[i]); // printing the nested arrays
    for (let j = 0; j < subArray.length; j++)
    {
        // console.log(subArray[j]); // printing the idividual indexes inside the nested arrays
        str += subArray[j];
    }
}

console.log(str); // abcdefgh



