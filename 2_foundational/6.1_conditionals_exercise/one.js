// snippet 1-0

// For console clarity
console.log('\n');

let qty = 38;

if (qty > 30 && qty % 5 === 4)
{
    console.log('swish'); // this won't print, because qty % 5 does not equal to 4
} else {
    console.log('swoosh'); // this will print
}

if (qty > 0)
{
    console.log('positive'); // this will print
}

// snippet 1-1

let a = 'celery';
let b = 'SQUASH';

if (a === a.toUpperCase())
{
    console.log('alpha'); // this won't print
}

if (a === b.toUpperCase())
{
    console.log('beta'); // this won't print
}


// snippet 1-2

let number = 9;

if (number > 4)
{
    console.log('ding'); // this will print
} else if (number % 3 === 0) {
    console.log('dong'); // this won't print, because first condition is true and code already executed
}


// snippet 1-3

let z = 12;

if (z > 10) {
    console.log('vroom'); // this will print
}

if (z % 3 === 0) {
    console.log('skrrt'); // this will print
}

// For console clarity
console.log('\n');