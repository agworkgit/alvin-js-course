// Write a function `keyPair(obj1, obj2, key)` that accepts two objects and a key string as arguments.
// The function should return an array containing the values of the given key in `obj1` and `obj2`.
// See the examples.

let keyPair = function (obj1, obj2, key)
{
    let results = [];

    // Directly access the values using the key
    if (obj1[key] !== undefined) {
        results.push(obj1[key]);
    }

    if (obj2[key] !== undefined) {
        results.push(obj2[key]);
    }

/*     // check if obj1 has the key and push its value to results
    if (obj1.hasOwnProperty(key))
    {
        results.push(obj1[key]);
    }

    // check if obj2 has the key and push its value to results
    if (obj2.hasOwnProperty(key))
    {
        results.push(obj2[key]);
    } */

    return results;
}

let cat1 = { name: "jinkee", breed: "calico" };
let cat2 = { name: "garfield", breed: "red tabby" };
console.log(keyPair(cat1, cat2, "breed")); // [ 'calico', 'red tabby' ]
console.log(keyPair(cat1, cat2, "name")); // [ 'jinkee', 'garfield ]

let sport1 = { name: "volleyball", team: true };
let sport2 = { name: "golf", team: false };
console.log(keyPair(sport1, sport2, "team")); // [ true, false ]