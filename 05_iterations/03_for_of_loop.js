/* ----------------------------------------------
                 for of loop
   ----------------------------------------------    */

/*
    ["", "", ""];
    [{}, {}, {}];

    Syntex-

    for (const iterator of object) {
    
    }

*/

// <--- Example: 1 ---> With Array

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

/* output:-
    1
    2
    3
    4
    5

*/

// <--- Example: 2 ---> With String
const greetings = "Hello World!";

for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}

// ----------------------------------------
// <----------------- Map() -------------->
// ----------------------------------------
// <--- Example: 3 ---> With Map()

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America.");
map.set("Fr", "France");
map.set("IN", "India");

// console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

//  Note: "[key, value]" ki jagah ham only "key" ya fir "value" ka bhi use kar sakte hai.

/* Output:-

    Map(3) {
    'IN' => 'India',
    'USA' => 'United States of America.',
    'Fr' => 'France'
    }

    // for of loop se iteration
    IN :- India
    USA :- United States of America.
    Fr :- France
    
    
    Note:- map , object ki tarah hi hai, key-value format me .
    Duplicate value print nahi hogi.
    And Uniqec value ke liye jane jate hai.
    And jis order me enter kiya hai us order me bhi rahati he.

*/

// <--- Example: 4 ---> With Object

// ***** Important ******
// Note:- TypeError: myObject is not iterable
// Object ko is tarah se iterate nahi kar sakte hai, isko iterate karne ka ek tarika hota hai.

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

for (const [key, value] of myObject) {
  // console.log(key, ":-", value);
}

// Object ko iterate karne ke liye.
//  next file....
