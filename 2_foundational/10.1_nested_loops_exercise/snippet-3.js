// snippet 3
let friends = ["philip", "abby", "phelipe", "simcha"];

for (let i = 0; i < friends.length; i++) {
  for (let j = 0; j < friends.length; j++) {
    console.log(friends[i], friends[j]);
  }
}

// PREDICTION - 100%
// i -> 0, 1, 2, 3
// j -> 0, 1, 2, 3
// philip, philip
// philip, abby
// philip, phelipe
// philip, simcha
// abby, philip
// abby, abby
// abby, phelipe
// abby, simcha
// ...