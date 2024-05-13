/* ----------------------------------------------
                       Arrays
   ----------------------------------------------    */

   const Array = [0, 1, 2, 3, 4, 5, true, "username"];
   // square bracket me jo he use element bolte hai.
   // JavaScript arrays are resizable and can contain a mix of different data types.
   
   const myArr = [0, 1, 2, 3, 4, 5];
   console.log(myArr[1]);
   
   // Array Methods
   
   //push - element add karne ke liye used hota hai.
   myArr.push(6);
   myArr.push(7);
   
   // pop - last se element remove karne ke liye used hota hai.
   myArr.pop();
   console.log(myArr);
   
   // unshift - unshift ka used array ke starting me element add karne ke liye hota hai.
   const myArr1 = [1, 2, 3, 4, 5];
   myArr1.unshift(10);
   console.log(myArr1); // [ 10, 1, 2, 3, 4, 5 ]
   
   // shift - shift ka used array ke starting se element remove karne ke liye hota hai.
   myArr1.shift();
   console.log(myArr1); // [ 1, 2, 3, 4, 5 ]
   
   // includes() - includes() method ka used array ke andar praticular element he ya nahi ye check karne ke liye hota hai.
   console.log(myArr1.includes(5)); // true
   console.log(myArr1.includes(15)); // false
   
   // indexOf() - method ka used array ke element ka index check karne ke liye hota hai.
   const myArr2 = [10, 20, 30, 40, 50];
   console.log(myArr2.indexOf(40)); // 3
   
   // join() - ?
   const newArr = myArr2.join();
   console.log(myArr2); // [ 10, 20, 30, 40, 50 ]
   console.log(newArr); // 10,20,30,40,50
   console.log(typeof newArr); // string
   
   // slice() and splice() - important
   
   console.log("A ", myArr2); // A  [ 10, 20, 30, 40, 50 ]
   
   const myn1 = myArr2.slice(1, 3);
   console.log(myn1); // [ 20, 30 ]
   console.log("B ", myArr2); // B  [ 10, 20, 30, 40, 50 ]
   
   const myn2 = myArr2.splice(1, 3);
   console.log(myn1);
   console.log(myn2);
   console.log(myArr2); // [ 10, 50 ]  splice() method se jo existing aaray tha us mese element hi remive ho agye.
   