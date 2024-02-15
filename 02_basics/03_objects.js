// object ko declare krne ke 2 tarike h 
// 1st constructor ki tarah
// 2nd literal ki tarah
// the diffenrece is : singlton 

// Singleton means constrctor se bnate h to singleton ek object bnta h

// interviiew 
// contrctor se object bnayenge to hamesha singleton bnega
// literal se yadi object declare krenge to nhi bnta h singleton

// Q. Symbol lo usko object ki keys me addr kro print krke dikhao


// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Jatin Patel",
    [mySym]: "mykey1",
    age: 21,
    location: "Indore",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// basics
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// imp for interview
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);



JsUser.greeting = function(){
    console.log("Hello JS user");
}
// same object ko reference krna h to lgayenge this keyword

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    console.log(`My Age is ${this.age}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());