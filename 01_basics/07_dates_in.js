// // dates (Object)

let myDate = new Date()
// console.log(myDate.toString()); // Sat Jul 18 2026 09:11:32 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Sat Jul 18 2026
// console.log(myDate.toLocaleString()); // 18/7/2026, 9:11:32 am
// console.log(myDate.toISOString()); //2026-07-18T03:41:32.086Z
// console.log(myDate.toJSON()); // 2026-07-18T03:41:32.086Z2026-07-18T03:41:32.086Z
// console.log(myDate.toLocaleDateString()); // 18/7/2026
// console.log(myDate.toLocaleTimeString()); // 9:11:32 am
// console.log(myDate.toTimeString()); // 09:11:32 GMT+0530 (India Standard Time)
// console.log(myDate.toUTCString()); //sat, 18 Jul 2026 03:41:32 GMT
// console.log(myDate.getTimezoneOffset()); //-330

// console.log(typeof myDate);  // object

// let myCreatedDate = new Date(2026,0,23)
let myCreatedDate = new Date("07-18-2026")

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay() +1 );
console.log(newDate.getMonth());

newDate.toLocaleDateString('default',{
    weekday: "long",
    

})








