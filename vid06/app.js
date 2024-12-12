let score = null;

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score); // convert string and all of these value to number
//console.log(typeof valueInNumber); // number
//console.log(valueInNumber); // NaN - Not a Number

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);

// 1 => true; 0=> false
// "" =? false
// "hitesh" => true

let username = "rishi";
let age = 20;

let convertIntoNumber = Number(username);
let convertIntoString = String(age);
let convertIntoBoolean = Boolean(age);
let convertIntoObject = Object(age);

console.log(typeof convertIntoNumber); // number
console.log(convertIntoNumber); // NaN

console.log(typeof convertIntoString); // string
console.log(convertIntoString); // 20

console.log(typeof convertIntoBoolean); // boolean
console.log(convertIntoBoolean); // true

console.log(typeof convertIntoObject); // object
console.log(convertIntoObject); // [Number: 20]
