// Write a function `pickPrimes` that accepts an array of numbers as an argument. The function should
// return an array containing only the prime numbers. A prime number is a number that is
// only divisible by 1 and itself. The smallest prime number is 1.

// 1. Check if prime

let isPrime = function (num)
{
    // step 1 - handle edge cases
    if (num <= 1)
    {
        return false; // 1 is not prime
    }

    if (num === 2)
    {
        return true; // 2 is the smallest prime
    }

    // step 2 - check divisibility from 2 to sqrt(num)
    for (let i = 2; i <= Math.sqrt(num); i++)
    {
        if (num % i === 0)
        {
            return false; // found a divisor, so it's not prime
        }
    }

    return true; // no divisors found, it's prime
}

// 2. Return an array with only primes

let pickPrimes = function (array)
{
    let result = [];

    for (let i = 0; i < array.length; i++)
    {
        let num = array[i];
        if (isPrime(num))
        {
            result.push(num);
        }
    }

    return result;
}

console.log(pickPrimes([12, 3, 7, 18, 11])); // [3, 7, 11]
console.log(pickPrimes([17, 23, 9, 42])); // [17, 23]
console.log(pickPrimes([4, 2048, 100, 55])); // []