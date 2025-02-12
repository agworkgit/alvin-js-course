/* 
Arrays are a construct that programmers use to store related values in a single variable. An array contains one or more elements.
*/

/* 
LECTURE 1
*/

//-------------------------------------------------//

let fruits = ['banana','apple','mango','strawberry','grapes'];

console.log(fruits);
console.log(fruits.length);
console.log(fruits[0],fruits[1]);

let stuff = [true, 42, 'dog'];
console.log(stuff);

//-------------------------------------------------//

/* 
Note:
The push() method will take and argument and add it to the end of the array.
*/

//-------------------------------------------------//

stuff.push('cat','NY');
console.log(stuff);

let alphabet = ['a','b','c','d','d','e','f','g'];
console.log(alphabet.indexOf('d'));
console.log(alphabet.indexOf('z'));
console.log(alphabet.slice(1, 3)); // slice for 1 up to 3 exclusive

//-------------------------------------------------//

let array = ['art','cart','start','dart','dog'];
let longWords = [];

for (let i = 0; i < array.length; i++)
{
    let word = array[i];
    if (word.length >= 4)
    {
        longWords.push(word);
    }
}

console.log(longWords); // cart, start, dart

//-------------------------------------------------//

/* 
LECTURE 2
*/

//-------------------------------------------------//

let people = ['richard','betty', 'jj', 'anne', 'kwasi'];

console.log(people.indexOf('jj') > -1); // true
console.log(people.indexOf('richard') > -1);
console.log(people.indexOf('mary') > -1); // false

/* 
Note:
Instead of performing the check above we can use a built-in method called includes.
*/

console.log(people.includes('frank')); // false

/* 
Note:
Capitalisation will change the result!
*/

//-------------------------------------------------//

// Accessing individual words

let sentence = 'I cannot wait for dinner';

console.log(sentence[2]);
let words = sentence.split(' '); // this method splits the sentence string into and array separated by spaces, or whatever we pass in as the argument

console.log(sentence);
console.log(words);

for (let i = 0; i < words.length; i++)
{
    console.log(words[i]);
}
