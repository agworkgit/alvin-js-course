// Nested Loops are when we write a loop within the body of another loop. The pattern can be useful to generate "pairs" of things.

for (let i = 1; i <= 5; i++) // each iteration starts the loop inside which prints 1, 2, 3
{
    console.log(i);
    console.log('beginning j');
    for (let j = 1; j <= 3; j++) // counts from 1 to 3
    {
        console.log('   ' + j);
    }
    console.log('finishing j');
}

// The complete nested loop will go 1 - 1, 2, 3 then 2 - 1, 2, 3... and so on

// When we nest a loop inside another loop, the inside loop will run the number of times of the outside loop

console.log('\n'); // New line

// What the nested loop below is doing is printing all the possible pairs in the array
// However, be mindful of duplicate pairs

let array = ['red','blue','green','orange'];

for (let i = 0; i < array.length; i++)
{
    for (let j = 0; j < array.length; j++)
    {
        console.log(array[i], array[j]);
    }
}

// Removing duplicates

console.log('\n'); // New line

let newArr = ['purple','yellow','black','lime'];

for (let i = 0; i < newArr.length; i++)
{
    for (let j = i + 1; j < newArr.length; j++) // start from current index + 1
    {
        console.log(newArr[i], newArr[j]);
    }
}

// Iteration flow

// i      =     0         1        2       3
// array  = ['purple','yellow','black','lime']
//              ^
//              i

// j      =     0         1        2       3
// array  = ['purple','yellow','black','lime']
//                        ^
//                      i + 1


console.log('\n'); // New line