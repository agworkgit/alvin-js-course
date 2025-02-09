// Write a function named `oddSum(max)` that accepts a max number as an argument. The function should
// return the total sum of all odd numbers from 1 to the max, inclusive.
//
// For example, oddSum(10) should return 25 because 1 + 3 + 5 + 7 + 9 = 25

let oddSum = function (max)
{
    let total = 0;
    for (let i = 1; i <= max; i++)
    {
        if (i % 2 === 1)
        {
            total += i;
        } else {
            // do nothing
        }
    }
    return total;
}

console.log(oddSum(10)); // 25
console.log(oddSum(5)); // 9

/* 
WHERE DID YOU GET STUCK?

I got stuck at the conditional part, instead of evaluating odd by saying i % 2 === 1, I was doing modulo 1 equal to 0 which I now know was wrong.
*/