/* ----------------------------------------------
             this and arrow function
   ----------------------------------------------    */

// +++++++++++++++ this +++++++++++++++++++++

const user = {
    username: "Veer",
    price: 999,
  
    welcomeMessage: function () {
      console.log(`${this.username}, welcome to website.`);
      // console.log(this);
    },
  };
  
  // user.welcomeMessage();
  
  // user.username = "Jay";
  // user.welcomeMessage();
  
  // console.log(this);
  // this me ye output {} empty object dega.
  
  // Question/Answer :- browser ke andar jo globle object hota he vo "window" object hota hai.
  
  // +++++++++++++++++++++ Arrow Function ++++++++++++++++++
  
  // <------ function declaration ------->
  function chai() {
    let username = "parvin";
    console.log(this.username);
  }
  // chai();
  // output:- undefined
  
  // Note: Object ke andar hum "this" ka use kar sakte hai.
  // But function me this ka use nahi kar pa rahe hai.
  
  // <------- function expression ------->
  
  const chai1 = function () {
    let username = "parvin";
    console.log(this.username);
  };
  
  // <------- Arrow function --------->
  
  const chaiCode = () => {
    let username = "parvin";
    console.log(this.username);
  };
  
  // chaiCode();
  // output:- undefined
  
  // ----------------------------------------
  // <----------- Arrow Function ------------>
  // ----------------------------------------
  
  // Basic Arrow Function
  
  /*
      const addTwo = (num1, num2) => {
      return num1 + num2;
      };
  
      console.log(addTwo(7, 5)); // 12
  
  */
  
  // Impliciate return arrow function
  
  // Impliciate ka matlab he ki me maan leta hu, apko likhne ki jarurat nahi hai.
  
  // const addTwo = (num1, num2) => num1 + num2;
  
  const addTwo = (num1, num2) => num1 + num2;
  
  // Note: curly bracket likha to return keyword likhna hoga,
  // And " () " likhe to return keyword ka use nahi karna he.
  console.log(addTwo(10, 15)); // 25
  
  // Note: Impliciate return means return nahi use karna , And Expliciate return means expliciate return keyword use karna.
  
  const addTWO = (num1, num2) => ({
    username: "Pravin",
  });
  console.log(addTWO(11, 22)); // { username: 'Pravin' }
  
  // Note: "()" paranthicis ka use nahi karge to output - undefined aayega.
  // const addTWO = (num1, num2) => ({username: "Pravin"});
  