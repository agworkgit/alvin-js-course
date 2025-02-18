// snippet 5
let colors = ["red", "purple", "orange"];

for (let i = 0; i < colors.length; i++) { // i = 0, 1, 2
  let colorStr = colors[i]; // colorStr = 'red'
  console.log(colorStr);

  for (let j = 0; j < colorStr.length; j++) { // j = 0 to colorStr.length = 3
    let char = colorStr[j];
    console.log(char); // char = 'r' then 'e' then 'd'
  }
}

// PREDICTION - 75%
// i -> 0,1,2
// j -> 0,1,2
// red
// r
// e
// d
// purple
// p
// u
// r
// p
// l
// e
// orange
// o
// r
// a
// n
// g
// e