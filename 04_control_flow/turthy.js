/* ----------------------------------------------
              truthy and falsy value
   ----------------------------------------------    */

/*
    <---- falsy values ---->
    
    false,
    0,
    -0,
    BigInt 0n,
    "",
    null,
    undefined,
    NaN,


    <---- truthy values ---->

    true,
    {},
    [],
    "0",
    'false',
    " ",

    function(){} - empty function bolte hai. truthy value hai.

    
    Note:- string me koi bhi add kar le vo truthy value ban jati hai.

*/

// const userEmail = "pravin@google.com";
// Got User email

// const userEmail = "";
// Don't have user email

const userEmail = " ";
// Got User email

// const userEmail = [];
// Got User email

// const userEmail = {};
// Got User email

if (userEmail) {
  console.log("Got User email");
} else {
  console.log("Don't have user email");
}

// <--- Array empty ho to check karne ke liye. --->

const emptyArray = [];

if (emptyArray.length === 0) {
  console.log("Array is empty.");
}
// Output - Array is empty.

// <--- Object empty ho to check karne ke liye. --->

const emptyObject = {};

/*
  // error - object ko aase check nahi kar sakte hai. 

    if (emptyObject.length === 0) {
      console.log("Object is empty");
    }

*/

if (Object.keys(emptyObject.length === 0)) {
  console.log("Object is empty");
}

// output - Object is empty

/* 
  <--- Some Other case --->

  false == 0    -> true
  false == ''   -> true
  0 == ''       -> true

  
*/

// ----------------------------------------------------------
// <--- Nullish Coalesing Operator (??): null undefined --->
// ----------------------------------------------------------

// use - error aaye to use handle karna, error ki jagah value asign karna he to vo bhi kar sakte hai.

let var1;

// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;

val1 = null ?? 10 ?? 20 ?? 30; // 10
// note - jo bhi pahli value hogi vo output aayega.
console.log(val1);

// ----------------------------------------------------------
//              <--- Terniary Operator--->
// ----------------------------------------------------------

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");

// more than 80
