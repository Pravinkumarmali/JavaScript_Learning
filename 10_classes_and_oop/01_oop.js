const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

/*
    // new keyword //
    step-1 : Pahle ek empty object create hota hai.
    step-2 : fir ek constructor function call hota hai, new keyword ke karan. Or ye jitne bhi arrugument hota hai use pack karke de deta hai.
    step-3 : jo bhi arrgument likhe hai vo "this" keyword mai inject hote hai.
    step-4 : and 4th step mai hame mil jate hai function ke andar.

*/
