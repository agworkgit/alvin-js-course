// snippet 0-2

let howMany = function ()
{
    return 42;
}

console.log(howMany); // this will print the entire function
console.log(howMany()); // 42

const theAnswer = howMany();
console.log(theAnswer); // 42

let howMuch = function ()
{
    5; // the function doesn't know about this, will return undefined
}
console.log(howMuch()); // undefined

