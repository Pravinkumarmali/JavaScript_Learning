/* ----------------------------------------------
                    While loop
   ----------------------------------------------    */
// <--- Example:1 --->
let index = 0;
while (index <= 10) {
  console.log(`Value of index is ${index}`);
  index = index + 2;
}

/* output:-

    Value of index is 0
    Value of index is 2
    Value of index is 4
    Value of index is 6
    Value of index is 8
    Value of index is 10

*/

// <--- Example:2 --->

let myArray = ["flash", "batman", "superman"];

let arr = 0;

while (arr < myArray.length) {
  console.log(`Value is ${myArray[arr]}`);
  arr = arr + 1;
  //   arr++;
}

/* output:-

    Value is flash      
    Value is batman     
    Value is superman
*/

/* ----------------------------------------------
                  Do While loop
   ----------------------------------------------    */

// <--- Example:1 --->

let score = 1;
// let score = 6;

do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 5);

/* output:-
case:1
    Score is 1
    Score is 2
    Score is 3
    Score is 4
    Score is 5

case:2
    Score is 6

*/
