// snippet 1

let flim = function () {
    console.log("leak");
    flam();
    console.log("geek");
  };
  
  let flam = function () {
    console.log("beak");
    console.log("sneak");
  };
  
  flim();

// PREDICTED OUTPUT:

// start in flim, log ---> leak
// jump into flam to log ---> beak
// jump into flam to log ---> sneak
// back to flim, log ---> geek

// 100 %