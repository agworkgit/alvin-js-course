// Write a function `removeShortWords` that accepts a sentence string as an argument. The function
// should return a new sentence where all of the words shorter than 4 characters are removed.

let removeShortWords = function (string) {
  let split = string.split(" ");
  let newString = [];
  for (let i = 0; i < split.length; i++) {
    if (split[i].length > 3) {
      newString.push(split[i]);
    }
  }
  return newString.join(' ');
};

console.log(removeShortWords("knock on the door will you")); // 'knock door will'
console.log(removeShortWords("a terrible plan")); // 'terrible plan'
console.log(removeShortWords("run faster that way")); // 'faster that'
