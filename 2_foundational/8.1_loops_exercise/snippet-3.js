// snippet 3
let foo = function () {
    for (let num = 10; num > 0; num -= 2) {
      console.log(num);
    }
  };
  
  console.log("begin");
  foo();
  console.log("end");
  foo();

/* 
PREDICTION - 80%

'begin'
10
8
6
4
2
'end'
10
8
6
4
2

What did I get wrong?
I assumed that first iteration will decrement 2 meaning the first log will start at 8 and continue decrementing from there.
However, it starts at 10 before the first decrement happens.

*/