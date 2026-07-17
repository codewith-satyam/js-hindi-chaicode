const name = "Satyam"
const repoCount = 30

// console.log(name + repoCount + " Value");   basic method

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String('hitesh-hc')

console.log(gameName[4]);
console.log(gameName.__proto__);

console.log(gameName.length);  // 6
console.log(gameName.toUpperCase()); // HITESH
console.log(gameName.charAt(2)); //t
console.log(gameName.indexOf('t')); //2

const newString = gameName.substring(0,4)
// console.log(newString);


const newString = gameName.slice(-8,4)
console.log(newString);

const newStringOne = "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://satyam.com/satyam%20gupta"
console.log(url.replace('%20', '_'));

console.log(url.includes('gupta')); //true
console.log(url.includes('guptq'));  // false

console.log(gameName.split('-'));



// practice session.***************

// Q:1 create a string and print its length
const fullName = "Spider-Man" 
console.log(fullName);

// Q:2 Extract the first character from a string
console.log(fullName[0]);

// Q:3 Extract the last character from the string
console.log(fullName[9]);

//Q: 4 convert the string into uppercase
console.log(fullName.toUpperCase());

// Q:5 Convert the string into lowercase
console.log(fullName.toLowerCase());

//Q:6 slice the first 5 character from a string
console.log(fullName.slice(0,4)); // spid

//Q:7 slice the last 5 character from a string
console.log(fullName.slice(5,9));

//Q:8 Replace the word "JavaScript" with "JS" in a string
let str  = "I love Javascript. Javascript is a amazing!"
let newStr = str.replace("Javascript", "js");
console.log(newStr);

//Q:9 Check if a string include with the word "code"
let word = "hello coders"
console.log(word.includes("code")); // true

// Q:10 split a string into an array of word
let city = "Gorakhpur is a beautiful city"
console.log(city.split(" "));

// Q"11 join the words of an arary with a hyper "_".
let words = ["I" , "love", "javascript"]
console.log(words.join(" ")); // I love javascript

// Q:12 Remove extra space from a string
let str1 = " hello word  "
let result = str1.trim();
console.log(result);  // hello world

// Q13 Reverse a string
let str3 = "javascript"
let reversed = str3.split("").reverse().join("");  //logic
console.log(reversed);

//Q:14 Check if a string starts with "hello"
let str4 = "Hello sir"
console.log(str4.startsWith("Hello"));  // true

//Q:15 Check if a string ends with "!"
let str5 = "hello satyam!";
console.log(str5.endsWith("!"));
































