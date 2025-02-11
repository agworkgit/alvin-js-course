// Write a function `filterLongWords` that accepts an array of strings as an argument. The function
// should return a new array containing only the strings that are less than 5 characters long.

let filterLongWords = function (str) {
  let newStr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].length < 5) {
      newStr.push(str[i]);
    }
  }
  return newStr;
};

console.log(filterLongWords(["kale", "cat", "retro", "axe", "heirloom"]));
// ['kale', 'cat', 'axe']

console.log(filterLongWords(["disrupt", "pour", "trade", "pic"]));
// ['pour', 'pic']
