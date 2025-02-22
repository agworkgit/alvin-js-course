// Create a function `elementQuantities` that accepts an object as an argument. The object contains
// elements as keys and quantities as values. The function should return an array containing the elements
// appearing with the correct quantities. See the examples.

let elementQuantities = function (obj)
{
    let results = [];
    let keys = Object.keys(obj); // this gets an array of keys like ['cat','bird','dog']

    for (let i = 0; i < keys.length; i++) // loop through the keys
    {
        let key = keys[i]; // get the current key
        let quantity = obj[key]; // get the quantity for that key

        for (let j = 0; j < quantity; j++) {
            results.push(key); // add the element to results
        }
    }

    return results;
}

let quantities1 = { cat: 3, bird: 1, dog: 2 };
console.log(elementQuantities(quantities1)); // ['cat', 'cat', 'cat', 'bird, 'dog', 'dog']

let quantities2 = { blue: 3, brown: 1 };
console.log(elementQuantities(quantities2)); // ['blue', 'blue', 'blue', 'brown']