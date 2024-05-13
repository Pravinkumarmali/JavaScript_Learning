/* ----------------------------------------------
                      Functions
   ----------------------------------------------    */

/*
        functionName - ise function ka raference bolte hai. isse se pata chalta he ki vo function vaha rahta he.
        functionName() - peranthics () lagane ke bad use function ka execution bolte hai. 

   */
/*
    function sayMyName() {
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("V");
    console.log("I");
    console.log("N");
    }

    sayMyName();
*/
/*
    function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
    }
    addTwoNumbers(8, 12); // Note - 8,12 - ise arrgument bolte hai.
*/

// NOTE- Jab bhi ham function ki defination banate he , to jo bhi input lete hai. Use "Parameters" bolte hai. Ex- number1 and number2 parameters hai.

// And jab function ko call karate he tab jo value pass karte he use arrugment bolte hai.

/*

  function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
  }

  // addTwoNumbers(8, "12"); // 812
  const result = addTwoNumbers(10, 50);
  console.log(result); // Outout - undefined

  // Note: console me undefined aayega. kiuki function ne koi value return hi nahi ki , or koi value return hi nahi ki to vo variable me store hi nahi hogi.or na hi print hogi.To is liye hame function ko return karna hoga.

*/

function addTwoNumbers(number1, number2) {
    // Step - 1
    // let result = number1 + number2;
    // return result;
  
    // Step - 2
    return number1 + number2;
  }
  const result = addTwoNumbers(20, 40);
  console.log("Result is:", result); // Result is: 60
  
  // <---------  Case - 2  -------->
  /*
    function loginUserMassage(username) {
      return `${username} just logged in.`;
    }
    console.log(loginUserMassage("Pravin"));
    // Pravin just logged in.
  */
  
  // <--- Question ---> - empty string value pass kare tab output me " just logged in." hi aayega.
  // console.log(loginUserMassage(""));
  
  // <--- Question ---> - function me value hi pass nahi kare tab output - me "undefined just logged in." " undefined " hi aayega.
  // console.log(loginUserMassage());
  
  function loginUserMassage(username) {
    /*
      Step - 1
        if (username === undefined) {
          console.log("Please enter a username.");
          return;
        }
    */
  
    if (!username) {
      console.log("Please enter a username.");
      return;
    }
    return `${username} just logged in.`;
  }
  console.log(loginUserMassage());
  
  // Output - Please enter a username.; undefined
  
  // Note - return ke bad jo bhi likha ho vo print nahi hota hai.
  
  /*
      Important Note: - If hum chahte hai ki dayi user value hi na de to default value hi de sakte hai.
      Ex - 
  
      function loginUserMassage(username = sam){
  
      }
  
      (username = sam) to undefined ki jagah sam aayega. 
  */
  
  // <=======------- rest -----===========>
  function calculateCartPrice(...num1) {
    return num1;
  }
  console.log(calculateCartPrice(200, 500, 800, 900));
  // Output - [ 200, 500, 800, 900 ] array me aayega.
  
  // ===============================================
  // <------ Object handle in Function ------>
  // ===============================================
  
  //++++++ Case - 1  -> Object bana ke fir pass karna hai.
  
  const user = {
    username: "user1",
    price: 199,
  };
  
  function handleObject(anyObject) {
    console.log(
      `Username is ${anyObject.username} and price is ${anyObject.price}`
    );
  }
  
  // handleObject(user);
  
  // Output -> Username is user1 and price is 199
  // Note -> Username ya price object me ha huaa to uski jagah undefined aayega. Ex- Username is user2 and price is undefined .
  
  //++++++ Case - 2 -> Direct object pass karna hai.
  
  handleObject({
    username: "Raj",
    price: 299,
  });
  // output - Username is Raj and price is 299
  
  // ===============================================
  // <------ Array handle in Function ------>
  // ===============================================
  
  //+++++++ Case - 1  -> Array bana ke fir pass karna hai.
  
  const myNewArray = [200, 400, 900, 100];
  
  function returnSecondValue(getArray) {
    return getArray[1]; // index no
  }
  console.log(returnSecondValue(myNewArray)); // Output -> 400
  
  //++++++ Case - 2 -> Direct Array pass karna hai.
  
  console.log(returnSecondValue([500, 600, 100, 450]));
  // Output -> 600
  