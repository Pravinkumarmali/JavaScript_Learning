// -> Kis trah he data ko memory me rakha jata he or access kiya jata he us base par data ka 2 category me rakha gaya he.

// 1) Primitive

// -> 7 types : String, Numeber, Boolearn, null(means- empty), undefined, Symbol, BigInt

// Number
const score = 100;
const scoreValue = 100.5;

// Boolean
const isLoggedIn = false;

// null
const outSideTemp = null;

// undefined
let userEmail;

// Symbol
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); // false

//BigInt
// note - n is represnt of bigInt datatype.
const bigInt = 9865742135628956n;

// 2) Reference Type (Non-Primitive)

// -> Array, objects, Functions
// Array
let Array1 = ["one", "two", "three"];

// object
let obejct1 = {
  name: "Pravin",
  age: 22,
};

// Function
let myFunc = function () {
  console.log("Hello World");
};

// How Check datatype
console.log(typeof myFunc); // output is function.

/*
    typeof Operator Results

    TYPE OF VALUE    -       RESULT
   ---------------------------------------
    Undefined        -     "undefined" 
    Null             -      "object"   
    Boolean          -      "boolean"   
    Number           -      "numebr"
    String           -      "string"
    function         -      "function"
    object           -      "object"
   --------------------------------------
   
*/

/*
------------------------------------------------------------
      Stack (primitive),      Heap(Non-primitive)
------------------------------------------------------------     
*/
//// Stack (primitive) ////
let myYoutubename = "nasoStudio";

let anotherName = myYoutubename;
anotherName = "nasoFashion";

console.log(myYoutubename); // nasoStudio
console.log(anotherName); // nasoFashion
// Note: value change nahi hui because stack me copy hota he actual me change nahi hota he.
// stack ke andar copy milta he.

//// Heap (non-primitive) ////

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "pravin@google.com";

console.log(userOne.email); // pravin@google.com
console.log(userTwo.email); // pravin@google.com

// Note: Heap me copy nahi hota he value reference hoti hai. original value me changes hote he.
// Heap ke andar referance milta he.
