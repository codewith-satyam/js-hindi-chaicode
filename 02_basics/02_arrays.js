const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// let allHeros= marvel_heros.concat(dc_heros);
// console.log(allHeros);
 

// const new_all_new_heros  = [...marvel_heros, ...dc_heros]
// console.log(new_all_new_heros);

const another_array = [1,2,3,[4,5,6],7,7,[4,5]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("satyam"));
console.log(Array.from("satyam"));
console.log(Array.from({name:"steam"})); // interesting ....



let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));  









