// objects ko singlton kese kre ?
// object ko constructor ki help se kese declare kr skte h

// interview 
// const tinderUser = new Object()  -----singlton object h------
// const tinderUser = {}             -----Non-singlton object h------

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "ram"
tinderUser.isLoggedIn = false

// console.log(tinderUser.id);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Jatin",
            lastname: "Patel"
        }
    }
}

// * optional chaining
// console.log(regularUser.fullname?.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }


// const obj3 = Object.assign({}, obj1, obj2, obj4)
// 1) {}  <--- this is a optional parameter or empty array  kyuki isse jitni bhi value h wo sab combine ho jayegi
// console.log(obj3)

// 2) resion is hum object return kr hi rhe h to ek empty object bhi return krde 
// 3) assign ke through hum object ko assign kr skte h 
// 4) per isko bhi hum kam hi use krenge

// combine krne ke liye 90%  yahi use krenge latest bhi h 
const obj3 = {...obj1, ...obj2,...obj4}
// console.log(obj3);



const users = [
    {
        id: 8,
        email: "h@gmail.com"
    },
    {
        id: 888,
        email: "j@gmail.com"
    },
    {
        id: 786,
        email: "h@gmail.com"
    },
]

// console.log(users[1].email);
// console.log(users[1].id);

// console.log(tinderUser);


// object ke propertie ko array ke form me laana = o/p value is in array form
// saari keys ko array  me rkh diya loop lga diya kahi pr bhi use kr skte h
// Data base jab ham kaam krnege tab smjh aayega
// console.log(Object.keys(tinderUser));
// key ki tarah values ko bhi nikal skte h
// console.log(Object.values(tinderUser));
// har key value ko array me bna deta h kam use hota h
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('id'));

// *****************************************************


// ********* Important **********

// destructioring objects or array ki hi hoti h
// kisi bhi value ko destructure krna
// kisi bhi object ko destructure krna


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


// API Basic Intro

// 1) api means apna kaam kisi or ke sar pe daale dena hi api kehlata h
// 2> exple restaurant *** menu card jo wo api ka documentation hi h
// 3) login me verification api hi dekhta h
// 4) api means kuch value aati h backend se use hum kese likhte h  
// 5) pehle ke time values aati thi xml structure me ab JSON me aatfi h 


// jason se ham kese api call krte h
// api se kese call aati h

// to muje isme sikhna kya h
// 1) muje api ya js me fetch method ke baare me sikhna h  
// 3) fetch method se ye url call krunga respone me muje ye data mil jayega

// iss tarah se api ke andr values milti h