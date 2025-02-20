let alice = function (n) {
    for (let i = 0; i <= n; i++) { // iterate n times
      bob(i); // call bob with i argument
    }
  };
  
  let bob = function (n) {
    if (n % 2 === 0) { // bob will compare if i % 2 is 0
      console.log("good"); // if true, then good
    } else {
      console.log("bad"); // if false, then bad
    }
  };
  
  alice(4);

// PREDICTED OUTPUT:

// call allice();
// alice() calls bob();
// print (from alice) ---> good (from bob)
// print ---> bad
// print ---> good
// print ---> bad
// print ---> good

// 90%