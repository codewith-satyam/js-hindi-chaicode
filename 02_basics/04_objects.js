// const tinder =new Object()  singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "smartyBoy"
tinderUser.isLoggedIn = "false"


// console.log(tinderUser);

const regularUser = {
    email:"satyam6453@gmail.com",
    fullname:{
        userfullname:{
            firstname:"satyam",
            lastname:"gupta"
        }
    }

}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id:1,
        email:"satyam@gmail.com",
    },
     {
        id:1,
        email:"satyam@gmail.com",
    },
     {
        id:1,
        email:"satyam@gmail.com",
    },
     {
        id:1,
        email:"satyam@gmail.com",
    },

]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
const course = {
    coursrname:"javascript in hindi",
    price:"999",
    courseInstructor: "chaiaurcode",

}
// course.courseInstructor
const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "satyam",
//     "coursename": "js in hindi",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]






