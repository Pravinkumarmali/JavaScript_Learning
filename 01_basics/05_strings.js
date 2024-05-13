/* ----------------------------------------------
                    String
   ----------------------------------------------    */

   let name = "pravin";
   let repoCount = 51;
   
   // note: is tarh ka use hame kam karana chahiye industry me.
   console.log(name + repoCount + " value");
   
   // Note: is tarah ka use jayada hota he , or hame yehi format follow karna chahiye.
   console.log(`Hello, My name is ${name} and my repo count is ${repoCount}`);
   
   const gameName = new String("bahubali");
   
   console.log(gameName[0]);
   console.log(gameName.__proto__);
   console.log(gameName.length);
   console.log(gameName.toUpperCase());
   console.log(gameName.charAt(3));
   console.log(gameName.indexOf("a"));
   
   const newString = gameName.substring(0, 4); // nagetive value nahi de sakte he.
   console.log(newString); //bahu
   
   const anotherName = gameName.slice(-8, 4); // nagetive value de sakte he.
   console.log(anotherName);
   
   const username = "   Pravin   ";
   console.log(username);
   console.log(username.trim());
   // white space ko remove karne ke kaam aata he. use - if user aagar start me ya end me white space de de to use remove karne ke kaam aata he.
   
   const url = "https://pravinkumar.com/pravin%20mali";
   
   console.log(url.replace("%20", "-")); // https://pravinkumar/pravin-mali
   
   console.log(url.includes("pravin")); // true
   
   const newName = "pravin-hc-com";
   console.log(newName.split("-"));
   