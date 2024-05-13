// Most useful loop - forEach

const coding = ["js", "ruby", "java", "python", "cpp"];

// <--- Ex.1 --->
// coding.forEach(function (val) {
//   console.log(val);
// });

// <--- Ex.2 --->
// arrow function se

// coding.forEach((item) => {
//   console.log(item);
// });

// <--- Ex.3 --->
// function ko pass karna forEach loop mai.

function printMe(item) {
  console.log(item);
}

coding.forEach(printMe);

// <--- Ex.4 --->
// forEach ke andar item, index and arr print.

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

/* output:- 

    js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]


*/

/* output:-

    js
    ruby  
    java  
    python
    cpp  

*/

// <--- Ex.5 --->
// Array ke andar , object ki property nikal ni hai.

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  //   console.log(item);
  //   console.log(item.languageFileName);
  console.log(item.languageName);
});

/*

Note: Use of this --> jab database se koi array aata hai, tab product hota hai, product ka price hota hai, to ye sab ki value web page me inject karna hota hai.
Tab ye kafi use hota hai.


    js
    java
    py


    javascript
    java
    python
*/
