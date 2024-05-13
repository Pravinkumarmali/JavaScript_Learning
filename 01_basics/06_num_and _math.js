`/* ----------------------------------------------
                    num and maths
   ----------------------------------------------    */`;

// +++++++++++++++++++++ Number ++++++++++++++++++++++++++ //
const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(2)); // 100.00

// const otherNumber = 23.895; // 23.9
const otherNumber = 123.895; // 124
// const otherNumber = 1123.895; // 1.12e+3

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); // 10,000,000

// +++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++ //
console.log("++++++++++++++ Maths ++++++++++++");
console.log(Math);
console.log(Math.abs(-5)); // 5
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.6)); // 5
console.log(Math.floor(4.6)); // 4
console.log(Math.min(9, 2, 5, 1)); // 1
console.log(Math.max(9, 2, 5, 1)); // 9

console.log(Math.random()); // random() function ki value always (0 - 1) ke bichh me aayegi.
console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
