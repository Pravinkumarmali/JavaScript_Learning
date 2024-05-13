/* ----------------------------------------------
                      Objects
   ----------------------------------------------    */

// singleton

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// object literals

// Declare the object
const JsUser = {
    name: "Pravin",
    //   "full_name": " Pravin Mali",
    age: 22,
    location: "Surat",
    email: "pravinkumar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday", "Saturday"],
  };
  
  // access the object
  // Two method hai.
  // 1)
  console.log(JsUser.email);
  // console.log(JsUser.full_name); // se ham use nahi kar sakte he, methos two use hogi.
  
  // 2)
  console.log(JsUser["email"]);
  // console.log(JsUser["full_name"]);
  
  // Note: Is tarah ki object ki value ko ham method "one" se access nahi kar sakte hai. Iske liye hame method "two" ka use karna hoga.
  
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  // Question: symbol ko object me use karo.
  
  const mySym = Symbol("key1");
  
  const object1 = {
    name: "user1",
    email: "user1@gmail.com",
    //   mySym: "mykey1", // ye symbol ki tarah ka nahi karega.
    [mySym]: "mykey1",
  };
  
  // console.log(object1.mySym); // ye method se nahi hoga. please used method two.
  console.log(object1[mySym]); // mykey1
  
  // change karne ke liye.
  JsUser.email = "pravin@microsoft.com";
  console.log(JsUser["email"]);
  
  // Changes ko lock ya freeze karne ke liye.
  // Object.freeze(JsUser);
  // JsUser.name = "RJD";
  // console.log(JsUser.name); // Pravin
  // Note - Changes nahi hoga.
  
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // Object me function use karna hai.
  
  JsUser.greeting = function () {
    console.log("Hello, JS user");
  };
  // console.log(JsUser.greeting); // [Function (anonymous)] - function excute nahi huaa he sirf function ka referance aaya hai.
  console.log(JsUser.greeting()); // Hello, JS user ; undefined
  
  JsUser.greetingTwo = function () {
    console.log(`Hello, Js user, ${this.name}`);
  };
  console.log(JsUser.greetingTwo()); // Hello, Js user, Pravin
  