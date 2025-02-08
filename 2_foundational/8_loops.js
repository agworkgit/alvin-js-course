/* 
Loops are a construct that programmers use control the repeated execution of code.
*/

console.log('\n');
console.log('start incrementing...');
for (let count = 0; count <= 3; count++)
{
    console.log(`iteration ${count}`);
}
console.log('end');

/* 
Note: 
Iteration just means one cycle of the loop.
*/

console.log('\n');
console.log('start decrementing...');
for (let i = 3; i >= 0; i--)
{
    console.log(`decrementing ${i}`);
}
console.log('end');

/* 
Note: 
Make sure your middle condition doesn't always evaluate to true otherwise you will get an infinite loop.
CTRL + C in terminal to break out of it.
*/

console.log('\n');
let str = 'krampus';

for (let i = 0; i < str.length; i++)
{
    console.log(str[i]); // [d,o,g]
}

/* 
Note:
str.length returns a number of the character length of the string
*/

console.log('\n');
let sum = 0;

for (let num = 1; num < 7; num++)
{
    sum += num;
}
console.log(sum); // 1+2+3+4+5+6 = 21




console.log('\n');