/* --------------------------------------------------------
// Object ko iterate karne ke liye for of loop ka use kare.
 ----------------------------------------------------------- */

 const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "Swift by apple",
  };
  
  for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    console.log(`${key} - shortcut is for ${myObject[key]}`);
  }
  
  /*
  
  -
    js
    cpp  
    rb   
    swift
  -
    javascript
    C++
    ruby
    Swift by apple
  -
    js - shortcut is for javascript
    cpp - shortcut is for C++
    rb - shortcut is for ruby
    swift - shortcut is for Swift by apple
  
  */
  
  // Array ko for in loop ki help se print karana.
  
  const programming = ["js", "rb", "py", "java", "cpp"];
  
  for (const key in programming) {
    // console.log(key);   // index print hoga.
    console.log(programming[key]); // index ki value print hogi.
  }
  