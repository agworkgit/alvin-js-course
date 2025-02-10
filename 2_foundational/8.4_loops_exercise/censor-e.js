// Write a function `censorE` that accepts a string as an argument. The function should return the a new
// version of string where all characters that are 'e's are replaced with '*'s.

let censorE = function (str) {
  let newstr = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === "e") {
      newstr += "*";
    } else {
      newstr += char;
    }
  }

  return newstr;
};

console.log(censorE("speedy")); // 'sp**dy'
console.log(censorE("pending")); // 'p*nding'
console.log(censorE("scene")); // 'sc*n*'
console.log(censorE("heat")); // 'h*at'

/* 
WHERE DID YOU GET STUCK?

I got stuck here at finding out what to do with str[i] and had to watch the walkthrough to get unstuck.
I learned to use temporary variables inside conditionals to keep track of characters.
*/