/* -------------------------------------------------------
                    reduce() method
---------------------------------------------------------*/
// ++++++++ Example:- 1 ++++++++

const myNums = [1, 2, 3, 4];

// <--- arrow function se --->

// const myTotal = myNums.reduce(
//     (accumulated, currentValue) => accumulated + currentValue,
//     0
//   );
// 10

// <--- normal function se --->

const myTotal = myNums.reduce(function (accumulated, currentValue) {
  console.log(
    `Accumulated - ${accumulated} and Current_Value - ${currentValue}`
  );
  return accumulated + currentValue;
}, 0);

console.log(myTotal);

/* output:- 

Note:- yaha par 0 initial value hai.

    Accumulated - 0 and Current_Value - 1
    Accumulated - 1 and Current_Value - 2
    Accumulated - 3 and Current_Value - 3
    Accumulated - 6 and Current_Value - 4
    10

*/

// ++++++++ Example:- 2 ++++++++

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);

// output:- 22996
