// snippet 4
let locations = ["flatbush", "williamsburg", "bushwick", "greenpoint"];

for (let i = 0; i < locations.length; i++) {
  for (let j = i + 1; j < locations.length; j++) {
    console.log(locations[i], locations[j]);
  }
}

// PREDICTION - 100%
// i -> 0, 1, 2, 3
// j -> 1, 2, 3
// flatbush, williamsburg
// flatbush, bushwick
// flatbush, greenpoint
// williamsburg, bushwick
// williamsburg, greenpoint
// bushwick, greenpoint