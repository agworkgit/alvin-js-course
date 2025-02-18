// Write a function `twoSum(numbers, target)` that accepts an array of numbers and a target number
// as an argument. The function should return a boolean indicating whether or not there exists a pair
// of distinct elements in the array that sum to the target.

let twoSum = function (numbers, target) {
    for (let i = 0; i < numbers.length; i++)
    {        
        for (let j = i + 1; j < numbers.length; j++) // we set j + 1 so that we get distinct pairs without duplicates
        {
            // console.log(numbers[i], numbers[j]);
            
            if (numbers[i] + numbers[j] === target)
            {
                return true;
            }
        }
    }
    return false;
};

console.log(twoSum([2, 3, 5, 9], 7)); // true
console.log(twoSum([2, 3, 5, 9], 4)); // false
console.log(twoSum([6, 3, 4], 10)); // true
console.log(twoSum([6, 5, 1], 10)); // false

// We return true once we find a pair that is equal to target
// We return false after the nested loops, after we have checked every pair!

// Remember that if you RETURN something out of a function, as soon as you do that you exit that function