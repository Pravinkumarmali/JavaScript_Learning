/* -------------------------------------------------------
                    map() method
---------------------------------------------------------*/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map((num) => {
//   return (num = num + 10);
// });

// const newNums = myNums.map((num) => (num = num + 10));
// console.log(newNums);

/* output:-
Note:- scope open kare {} to return ka use karna hoga.

[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20 
]

*/

// <--- map() chaning exapmle --->

// let newNums = myNums.map((num) => num * 10).map((num) => num + 1);

const newNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(newNums);

/* map() chaning example output:-

[
  11, 21, 31, 41,  51,
  61, 71, 81, 91, 101
]

------------------

[
  41, 51,  61, 71,
  81, 91, 101
]

*/
