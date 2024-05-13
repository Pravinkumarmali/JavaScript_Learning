/* ----------------------------------------------
                       Date
   ----------------------------------------------    */

   let myDate = new Date();
   console.log(myDate); //2024-03-29T13:50:24.201Z
   
   console.log(myDate.toString()); //    Fri Mar 29 2024 19:23:17 GMT+0530 (India Standard Time)
   console.log(myDate.toISOString()); //    2024-03-29T13:53:17.116Z
   console.log(myDate.toJSON()); //    2024-03-29T13:53:17.116Z
   console.log(myDate.toLocaleDateString()); //    29/3/2024
   console.log(myDate.toLocaleString()); //    29/3/2024, 7:24:19 pm
   console.log(myDate.toLocaleTimeString()); //    7:24:44 pm
   console.log(myDate.toUTCString()); //    Fri, 29 Mar 2024 13:55:00 GM
   
   console.log(typeof myDate); // object
   // Note - Date ka type of "object" hoga.
   
   // ++++++++++++++++++++++++++++++++++++++++++++
   
   // let myCreatedDate = new Date(2024, 0, 14); // Sun Jan 14 2024
   // let myCreatedDate = new Date(2024, 12, 29);  // Wed Jan 29 2025
   let myCreatedDate = new Date(2024, 2, 29); // Fri Mar 29 2024
   
   // Note - JavaScript me date me jo month he vo " 0 " se start hote hai.
   
   console.log(myCreatedDate.toDateString());
   
   // ++++++++++++++++++++++++++++++++++++++++++++++
   
   let myCreatedDate1 = new Date("04-14-2024"); // MM/DD/YYYY Format
   console.log(myCreatedDate1.toLocaleString()); // 14/4/2024, 12:00:00 am
   
   // ++++++++++++++++++++++++++++++++++++++++++++++
   
   let myTimeStamp = Date.now();
   
   console.log(myTimeStamp);
   console.log(myCreatedDate.getTime());
   // Note - answer milisecond me aayega.
   
   // ++++++++++++++++++++++++++++++++++++++++++++++
   
   console.log(Date.now());
   // milisecond se secound me convert karne ke liye /1000 se divide karna hoga.
   console.log(Date.now() / 1000);
   console.log(Math.floor(Date.now() / 1000)); // point remove karne ke liye.
   
   // ++++++++++++++++++++++++++++++++++++++++++++++
   
   let newDate = new Date();
   console.log(newDate.getDay()); // 5 - Friday
   console.log(newDate.getFullYear()); // 2024
   console.log(newDate.getDate()); // 29
   console.log(newDate.getMonth()); // 2 - March , 0 - means January
   console.log(newDate.getMonth() + 1); // 3 March Plus 1 karne se enduser month me confisued nahi hoga.
   
   //  `${newDate.getDate()}` and the time is.
   
   console.log(
     newDate.toLocaleString("default", {
       weekday: "long",
     })
   ); // Friday
   