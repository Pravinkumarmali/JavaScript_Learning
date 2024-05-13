/* ----------------------------------------------
                      Objects
   ----------------------------------------------    */

// ++++++  non-singketon object ++++++
// const facebookUser = {}

// ++++++ singleton object ++++++++
const facebookUser = new Object();
console.log(facebookUser); // empty {} object

// changes freeze karne ke liye.
// Object.freeze(facebookUser);

facebookUser.id = "121abc";
facebookUser.name = "Rajiv";
facebookUser.isLoggedIn = false;
console.log(facebookUser);
// { id: '121abc', name: 'Rajiv', isLoggedIn: false }

// +++++++ nested object +++++++++++++++
const regularUser = {
  email: "pravinkumar@facebook.com",
  fullname: {
    userfullname: {
      firstname: "Pravin",
      lastname: "Mali",
    },
  },
};
console.log(regularUser["fullname"]["userfullname"]);
// output - { firstname: 'Pravin', lastname: 'Mali' }
console.log(regularUser.fullname.userfullname.firstname);
// output - Pravin

// ++++++++++++ Combain(Marge) Object +++++++++++++++++++

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

/*
    const obj3 = { obj1, obj2 };
    console.log(obj3);

    output - { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } 
    --> is case me ye object ke ander alag alag object aa jayege , sahi se marge nahi hoge.

*/

// <== assign ki help se marge karna. ==>

// NOTE - Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

// Note -> Ye {} target he and uske aage ke object source. That means ki target me sare source object geranted ja rahe he.
/*
    const obj3 = Object.assign({}, obj1, obj2);
    console.log(obj3);
*/
// output - { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// <== spread ki help se marge karna. ==>
// Mostly ye method use hota hai.

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);
// output - { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// spread ke use bhi kar sakte hai ???

// ++++++++ Array of object - array ka object +++++++
// DATABASE se jab data use karna ho tab is tarah se use hota hai.

const users = [
  {
    id: 1,
    email: "user1@gmail.com",
  },
  {
    id: 2,
    email: "user2@gmail.com",
  },
  {
    id: 3,
    email: "user3@gmail.com",
  },
  {
    id: 4,
    email: "user4@gmail.com",
  },
  {
    id: 5,
    email: "user5@gmail.com",
  },
];

console.log(users[1].email);
// users array ka first index wale object ka email use kana hai.
// Output - user2@gmail.com

// <--- keys method --->
// Task - Object ke sare key ko lena hai.
console.log(Object.keys(facebookUser));
// Output - [ 'id', 'name', 'isLoggedIn' ]
// Note -> Object.key() ye object ke keys ko ek array me rakh deta he , And ab hum loop laga sakte hai and ise kahi bhi use kar sakte he.
// Database me work karte time ham ye sabhi ka kafi use karege.

// <---- values() method ---->
console.log(Object.values(facebookUser));
// output - [ '121abc', 'Rajiv', false ]

// <----- entries() method ----->
console.log(Object.entries(facebookUser));
// Output - [ [ 'id', '121abc' ], [ 'name', 'Rajiv' ], [ 'isLoggedIn', false ] ]

// <----- hasOwnProperty() method -----> Used - Check karne ke liye ki ye property he ya nahi.
console.log(facebookUser.hasOwnProperty("isLoggedIn"));
// Output - true

// <---- Destructuring ------>
console.log(" <---- Destructuring ------>");

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "Hitesh Sir",
};

// course.courseInstructor;
const { courseInstructor } = course;

console.log(courseInstructor);

// <---- JSON Format ------>
/* 
  {
    "name":"pravin",
    "coursename":"js in hindi",
    "price":"free",
  }

*/

/*
  [
    {},
    {},
  ]

*/
// Note: API object ke from me bhi store ho sakti he and array me bhi store ho sakti he.
