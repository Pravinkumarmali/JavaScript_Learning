/* -----------------------------------------------------------
        Immediately Invoked Function Expression (IIFE)
   -----------------------------------------------------------  */

// normal function
/*

    function chai() {
    console.log(`DB Connected.`);
    }
    chai();
    // Output:  DB Connected.

*/

// IIFE

(function chai() {
    console.log(`DB Connected.`);
  })();
  // Output : DB Connected.
  
  /*
  
          ()() - first "()" is function defination and Secound "()" is function execution call. For example - chai() like this.
  
          IIFE - Immediately Invoked Function Expression
          --> Kai bar globle scope ke pollution se problem hoti hai, to us globle scope ke variable hai ya jo bhi declaration hai uske pollution ko hatane ke liye hamne IIFE ka use kiya hai.
  
          NOTE:- IIFE ka use karte time " ; " ka use karna hai.
          ()(); ()(); then fir hi agala IIFE banana hai. nahi to syntex error aayega.
  
          NOTE:- named IIFE - Jise function ka naam diya use named IIFE bolege. Jese ki "chai" named IIFE hoga.
  
          Unamed IIFE :- Jise naam nahi diya ho use unmed IIFE bolege. jese ki Arrow function me ham function ka naam nahi dete hai , use unamed IIFE bolege.
          
  
  
  */
  
  // Arrow function se IIFE ka use.
  
  (() => {
    console.log(`DB CONNECTED TWO`);
  })();
  // Output - DB CONNECTED TWO
  
  // OTHER  EXAMPLE.
  
  ((name) => {
    console.log(`${name}, Welcome to our website.`);
  })("Pravin");
  // output - Pravin, Welcome to our website.
  