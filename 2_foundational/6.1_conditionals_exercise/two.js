// snippet 2-1

console.log("\n"); // newline

let nonsense = "blog trust fund tattooed williamsburg poke roof party";
let hasOk = nonsense.indexOf("ok") > -1; // evaluates to true

if (hasOk) {
  console.log("yeet"); // this will print
} else if (nonsense.length > 10) {
  console.log("no"); // doesn't get to here
} else {
  console.log("no"); // doesn't get to here
}

let hasZoo = nonsense.indexOf("zoo") > -1; // evaluates to false
let hasFun = nonsense.indexOf("fun") > -1; // evaluates to true

if (hasZoo && hasOk) {
  console.log("cool"); // this won't print
} else if (hasOk) {
  console.log("rad"); // this will print
} else if (hasFun) {
  console.log("dope"); // doesn't get to here
} else {
  console.log("nope"); // doesn't get to here
}

// snippet 2-2

let q = 25;
if (q % 3 === 0 && q % 5 === 0) {
  console.log("both"); // this won't print
} else if (q % 3 === 0 || q % 5 === 0) {
  console.log("either"); // this will print
} else {
  console.log("neither"); // doesn't get to here
}

let r = 9;
if (r % 3 === 0 && r % 5 === 0) {
  console.log("both"); // this won't print
} else if (r % 3 === 0 || r % 5 === 0) {
  console.log("either"); // this will print
} else {
  console.log("neither"); // doesn't get to here
}

let s = 15;
if (s % 3 === 0 && s % 5 === 0) {
  console.log("both"); // this will print
} else if (s % 3 === 0 || s % 5 == 0) {
  console.log("either"); // doesn't get here
} else {
  console.log("neither"); // doesn't get here
}

console.log("\n"); // newline
