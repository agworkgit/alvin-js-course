// snippet 2
for (let n = 0; n < 2; n++) {
    console.log("n=" + n); // n=0
    for (let m = 0; m < 5; m++) {
      console.log("   m=" + m); // m=0 to m=4 (first we finish all iterations here then move on)
    }
    console.log("n=" + n); // n=0
  }

// PREDICTION - 50%
// n -> 0, 1
// m -> 0, 1, 2, 3, 4
// n=0
//    m=0
//    m=1
//    m=2
//    m=3
//    m=4
// n=0
// n=1
//    m=0
//    m=1
//    m=2
//    m=3
//    m=4
// n=1