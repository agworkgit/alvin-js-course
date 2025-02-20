// Write a function `isPrime` that accepts a number as an argument. The function should return a
// boolean indicating whether or not the given number is prime. A prime number is a number that is
// only divisible by 1 and itself. The smallest prime number is 1.
//
// For example, 11 is a prime because it is only divisible by 1 and 11.
// For example, 8 is not a prime because it is divisible by 1, 2, 4, and 8

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


console.log(isPrime(11)); // true
console.log(isPrime(8)); // false
console.log(isPrime(7)); // true
console.log(isPrime(21)); // false
console.log(isPrime(2)); // true
console.log(isPrime(15)); // false
console.log(isPrime(1)); // false