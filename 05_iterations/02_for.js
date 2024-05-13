/* ----------------------------------------------
                    For loop
   ----------------------------------------------    */

// example - 1
/*

    for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
    }

*/

/*
    0
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
*/

// console.log(element);
// Note: element is not defined
// --> ye element ko hum bahar access nahi kar sakte hai kiuki isse scope ke ander declare kiya hai.

// example - 2

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
      console.log("5 is best number");
    }
    console.log(element);
  }
  
  /*
  
      0
      1
      2
      3
      4
      5 is best number
      5
      6
      7
      8
      9
      10
  
  */
  
  // example - 3
  
  for (let i = 0; i < 5; i++) {
    console.log(`Outer loop value : ${i}`);
    for (let j = 0; j < 5; j++) {
      // console.log(`Inner loop value: ${j} and inner loop ${i}`);
    }
  }
  
  /* output:- 
  
  Outer loop value : 0
  Inner loop value: 0 and inner loop 0
  Inner loop value: 1 and inner loop 0
  Inner loop value: 2 and inner loop 0
  Inner loop value: 3 and inner loop 0
  Inner loop value: 4 and inner loop 0
  Outer loop value : 1
  Inner loop value: 0 and inner loop 1
  Inner loop value: 1 and inner loop 1
  Inner loop value: 2 and inner loop 1
  Inner loop value: 3 and inner loop 1
  Inner loop value: 4 and inner loop 1
  and more...
  
  */
  
  // <--- Example - 4 ---> Tables print
  
  for (let i = 1; i < 5; i++) {
    //   console.log(`Table of : ${i}`);
  
    for (let j = 1; j < 5; j++) {
      // console.log(i + "*" + j + "=" + i * j);
    }
  }
  
  /* output:-
  
      Table of : 1
      1*1=1
      1*2=2
      1*3=3
      1*4=4
      Table of : 2
      2*1=2
      2*2=4
      2*3=6
      2*4=8
      Table of : 3
      3*1=3
      3*2=6
      3*3=9
      3*4=12
      Table of : 4
      4*1=4
      4*2=8
      4*3=12
      4*4=16
  
  */
  
  // <--- Example - 5 ---> Array
  
  let myArray = ["flash", "batman", "superman"];
  console.log(myArray.length);
  
  for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
  }
  
  /*
      3
      flash
      batman
      superman
  
  */
  
  // -----------------------------------------------
  // <------------- break and contiue ------------->
  // --------------------------------------------1--
  
  // <--- break --->
  for (let index = 1; index < 20; index++) {
    if (index == 5) {
      console.log(`Delected 5`);
      break;
    }
    console.log(`Value of i is ${index}`);
  }
  
  /* 
      note:- break -> Kisi bhi control flow ka break karna hoto break keyword ka use hota hai.
  
  output:- 
  
      Value of i is 1
      Value of i is 2
      Value of i is 3
      Value of i is 4
      Delected 5
      
  */
  
  // <--- contiue --->
  for (let index = 1; index < 20; index++) {
    if (index == 5) {
      console.log(`Delected 5`);
      continue;
    }
    console.log(`Value of i is ${index}`);
  }
  
  /* output:-
  
      Value of i is 1
      Value of i is 2
      Value of i is 3
      Value of i is 4
      Delected 5
      Value of i is 6
      Value of i is 7
      and more...
  
  */
  