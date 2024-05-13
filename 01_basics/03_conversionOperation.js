/*

console.log("<--- Number conversion --->");
// let score = 80;// number
let score = "80"; // string
// let score = null; // output: 0
// let score = undefined; // output: NaN
// let score = true; //output: 1

console.log(score);
console.log(typeof score);
console.log(typeof score);
// Use for convert string into number.
//Case:1
let valueInNumber = Number(score); // use for convert string into number.
console.log(typeof valueInNumber);
console.log(valueInNumber);

// Case:2
let Data = "55abc";

let valueInAlphanumeric = Number(Data);
console.log(typeof valueInAlphanumeric);
console.log(valueInAlphanumeric); // Output: NaN - not a number
// Ye String number me convert nahi huaa hai.

// NOTE: "80" => 80
// "80abc" => NaN
// true => 1; false => 0;

// Boolean Conversion
console.log("<--- Boolean conversion --->");

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false;
// "" => false;
// "parvin" => true;

// String Conversion
console.log("<--- String conversion --->");

let someNumber = 60;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);


*/

// ******************* Operations ***************************

let value = 3;
let negValue = -value;
console.log(negValue);

// Why String to number conversion is confusing.

let str1 = "PRAVIN";
let str2 = " MALI"; // Yaha par MALI ke pahle space karna hoga nahi to dono string pass pass me add hogi.
let str3 = str1 + str2;
console.log(str3);

//
/*
    console.log("1" + 2); //12
    console.log(1 + "2"); //12
    console.log("1" + 2 + 2); //122
    console.log(1 + 2 + "2"); //32
*/

/*
    console.log(+true); //1
    // console.log(true+); // wrong
    console.log(+"");  //0

*/

// is tarah ka code production me nahi chalega. X
/*
    let num1, num2, num3;
    num1 = num2 = num3 = 2 + 2;
*/

// google - prefix and postfix js mdn

let gameCounter = 100;
gameCounter++; // postfix
++gameCounter; //prefix
console.log(gameCounter);
