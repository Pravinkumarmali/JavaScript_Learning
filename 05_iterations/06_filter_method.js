/*

    const coding = ["js", "ruby", "java", "python", "cpp"];

    const values = coding.forEach((item) => {
    console.log(item);
    return item;
    });

    console.log(values); // output:- undefined aayega.


*/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// <--- filter() ka use step - 1 --->
// const newNums = myNums.filter((num) => num > 4);

// <--- filter() ka use step - 2 --->
// Note:- filter mai {} curly bracket ka use tab return karna jaruri hai nahi to output "empty" array aayega.

const newNums = myNums.filter((num) => {
  return num > 4;
});
console.log(newNums);
// Output :- [ 5, 6, 7, 8, 9, 10 ]

// <--- forEach() ki help se karna. --->

const myNums1 = [];

myNums.forEach((num) => {
  if (num > 4) {
    myNums1.push(num);
  }
});

console.log(myNums1);
// output:- [ 5, 6, 7, 8, 9, 10 ]

// ----------------------------------
// <--- filter() method example --->
// ----------------------------------

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History");

userBooks = books.filter((bk) => {
  //   return bk.publish >= 2000;
  return bk.publish >= 1995 && bk.genre === "History";
});
console.log(userBooks);

// Note:- second filter mai hamen {} - scope open kiya to hame return karna hoga, nahi to empty array output aayega.

/* output:-

    [
    {
        title: 'Book Three',
        genre: 'History',
        publish: 1999,
        edition: 2007
    },
    {
        title: 'Book Seven',
        genre: 'History',
        publish: 1986,
        edition: 1996
    }
    ]

    -----------

    [
    {
        title: 'Book Five',
        genre: 'Science',
        publish: 2009,
        edition: 2014
    },
    {
        title: 'Book Eight',
        genre: 'Science',
        publish: 2011,
        edition: 2016
    }
    ]

    -------------
    [
    {
        title: 'Book Three',
        genre: 'History',
        publish: 1999,
        edition: 2007
    }
    ]

    
*/
