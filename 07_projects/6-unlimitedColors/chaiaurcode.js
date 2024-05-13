// generate a random color

const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  // console.log(Math.floor(Math.random() * 16));
  // console.log(randomColor());
  
  let intervalId;
  const startChangingColor = function () {
    if (!intervalId) {
      intervalId = setInterval(changeBgColor, 1000);
    }
  
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  
  document.querySelector("#start").addEventListener("click", startChangingColor);
  
  document.querySelector("#stop").addEventListener("click", stopChangingColor);
  
  /*
  Notes:- 
      // addition assignment (+=) operator //
      -> x += y is equivalent to x = x + y, except that the expression x is only evaluated once.
  
      -> The addition assignment (+=) operator performs addition (which is either numeric addition or string concatenation) on the two operands and assigns the result to the left operand.
  
      -> for Ex.
      
          let a = 2;
          let b = 'hello';
  
          console.log((a += 3)); // Addition
          // Expected output: 5
  
          console.log((b += ' world')); // Concatenation
          // Expected output: "hello world"
  
  
  
  */
  