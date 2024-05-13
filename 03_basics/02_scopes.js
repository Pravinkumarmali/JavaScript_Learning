/* ----------------------------------------------
                      Scope
   ----------------------------------------------    */

/*
    {} - isi carly racket ko scope kahte hai. Ex- function mai , if else sentex mai.
   
    Note: if ke andar jo likha hai use "Block scope" , Bahar jo bhi likha hai use "Globle scope"  
*/

// <-------------- Case-1 ------------>

/*
    var c = 333;

    if (true) {
        let a = 10;
        const b = 20;
        var c = 30;
    }

*/

// console.log(a); // a is not defined
// console.log(b); // b is not defined

// var ka use mat karo.
// console.log(c); // 30

/*
    - Note: var c print ho jayega., to is liye hame variable defined karne keliye "var" ka use nahi karna chahiye.
    
    - Kiuki hamane variable scope me defined kiya tha fir bhi ye scope ke bahar print ho raha hai.
*/

// <-------------- Case-2 ------------>
let a = 50;

if (true) {
  let a = 10;
  const b = 20;
  console.log("INNER: ", a);
}

console.log("OUTER: ", a);

// Output : INNER:  10;  OUTER:  50
// So, This is Example of Block Scope and Globle Scope.

// ==============================================
// <-------------- nasted Scope -------------->
// ==============================================

// Example - 1

function one() {
  const username = "Pravin";

  function two() {
    const website = "Youtube";
    console.log(username);
  }

  //   console.log(website); // Note - Error show hoga.Because website ko ham Block scope ke bahar use kar rahe hai.

  two(); // Pravin
}

// one();

//  Note: Upar jo code he use ham ek Example se samjte hai. Choda bachcha bade se ice-cream le sakta hae , par bade chote bachche se ice-cream nahi le sakte hai.

// Example - 2

if (true) {
  const username_ = "naso";

  if (username_ === "Naso") {
    const website_ = " Youtube";
    console.log(username_ + website_);
    console.log("TRUE");
  }
  //   console.log(website); // Error - website is not defined
}

// console.log(username); // Error - username is not defined

// ++++++++++++++++ interesting +++++++++++++++

// <-------------- mini hoisting ---------------->

// function banane ka method
// ise ham pahle console kar sakte hai.
// function expression ko pahle use console nahi kar sakte hai.

console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

// function banane ka method

// isko function expression bolte hai.
const addTwo = function (num) {
  return num + 2;
};
addTwo(5);
