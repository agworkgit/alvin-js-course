// snippet 3

let foo = function () {
    for (let i = 0; i < 5; i++) { // iterates from 0 to 4
      console.log("i = " + i);
      bar();
    }
  };
  
  let bar = function () {
    for (let j = 0; j < 5; j++) { // iterates from 0 to 4
      console.log("  j = " + j);
    }
  };
  
  foo();

// PREDICTED OUTPUT:

// we call foo()
// i = 0
        // bar() ---> j = 0
        //       ---> j = 1
        //       ---> j = 2
        //       ---> j = 3
        //       ---> j = 4
// i = 1
        // bar() ---> j = 0
        //       ---> j = 1
        //       ---> j = 2
        //       ---> j = 3
        //       ---> j = 4
// i = 2
        // bar() ---> j = 0
        //       ---> j = 1
        //       ---> j = 2
        //       ---> j = 3
        //       ---> j = 4
// i = 3
        // bar() ---> j = 0
        //       ---> j = 1
        //       ---> j = 2
        //       ---> j = 3
        //       ---> j = 4
// i = 4
        // bar() ---> j = 0
        //       ---> j = 1
        //       ---> j = 2
        //       ---> j = 3
        //       ---> j = 4

// 70%