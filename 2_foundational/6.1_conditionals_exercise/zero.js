// snippet 0-1

if (true)
{
    console.log('foo'); // this will print
}

if (false)
{
    console.log('bar'); // this won't print
}

// snippet 0-2

if (false || false)
{
    console.log('boop'); // this won't print
    
}

if (true || false)
{
    console.log('beep'); // this will print
    
}

// snippet 0-3

let num = 48;

if (num > 0) 
{
    console.log('zip'); // this will print
}

if (num % 2 === 0)
{
    console.log('zoop'); // this will print
}

// snippet 0-4

let word = 'jeep';

if (word[0] === 'd')
{
    console.log('yer'); // this won't print
} else {
    console.log('nah'); // this will print
}

// snippet 0-5

let sentence = 'roger that';

if (sentence[sentence.length - 1] === 't')
{
    console.log('ends in t'); // this will print
} else {
    console.log('does not end in t'); // this won't print
}

if (sentence.length <= 4)
{
    console.log('short'); // this won't print
} else {
    console.log('long'); // this will print
}