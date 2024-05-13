/* ----------------------------------------------
                       Arrays
   ----------------------------------------------    */

   const marval_heros = ["thor", "Ironman", "spiderman"];
   const dc_heros = ["suparman", "flash", "batman"];
   
   // +++++++++++++ Push() +++++++++++++
   
   // marval_heros.push(dc_heros);
   // console.log(marval_heros);
   // [ 'thor', 'Ironman', 'spiderman', [ 'suparman', 'flash', 'batman' ] ]
   
   // console.log(marval_heros[3][1]); // flash
   
   // +++++++++++ concat() ++++++++++++++
   
   // marval_heros.concat(dc_heros);
   // console.log(marval_heros);
   // [ 'thor', 'Ironman', 'spiderman', [ 'suparman', 'flash', 'batman' ] ]
   
   // Note: concat hame new array deta hai, but use kisi variable me hold karna hoga.
   // both array marge ho raha hai.
   const allHeros = marval_heros.concat(dc_heros);
   console.log(allHeros);
   // [ 'thor', 'Ironman', 'spiderman', 'suparman', 'flash', 'batman' ]
   
   // +++++++++++ spread ++++++++++++
   // Note - Both array ko marge karne ke liye ham concat ki jagah spread ka bhi use kar sakte he and ye best practice hogi.
   
   const all_new_heros = [...marval_heros, ...dc_heros];
   console.log(all_new_heros);
   // output - [ 'thor', 'Ironman', 'spiderman', 'suparman', 'flash', 'batman' ]
   
   // +++++++++++ flat method ++++++++++++
   
   const another_array = [
     10,
     20,
     30,
     [45, 55, 65, 75, [85, 95, 100], 110, 120],
     200,
   ];
   console.log(another_array);
   // Output - [ 10, 20, 30, [ 45, 55, 65, 75, [ 85, 95, 100 ], 110, 120 ], 200 ]
   
   const real_another_array = another_array.flat(Infinity);
   // note- flat(kitni dept tak karna he vo likhna he 1, 2, 3, ya infinity)
   console.log(real_another_array);
   // [ 10,  20,  30, 45,  55, 65,  75,  85, 95, 100, 110, 120, 200]
   
   // ++++++++++++++++++++++++++++++++++
   // isArray =  check karne ke liye use hota he ki ye array he ya nahi.
   console.log(Array.isArray("username")); // false
   
   // from = array me banana ke liye.
   console.log(Array.from("username")); //  ['u', 's', 'e','r', 'n', 'a','m', 'e']
   
   console.log(Array.from({ name: "username" }));
   //   [] - interesting case - ye empty aray dega. iss case me hame bolna padta he ki keys ya value se array banaye, nahi to empty array dega.
   
   // ++++++++++++++++++++++++++++++++++
   // Array.of
   
   let score1 = 100;
   let score2 = 200;
   let score3 = 300;
   console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
   