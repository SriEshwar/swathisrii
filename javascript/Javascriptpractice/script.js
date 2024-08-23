let amount=1000;
    console.log("your bill amount is " + amount);
//operators
a=10;
a+=3;
console.log(a**2); 
// typeof 
b = 2;
console.log(typeof b);
console.log(typeof 'abc');
//automatic type conversion in javascript

console.log("5" - 1);
//strict comparsion also used to check type 
a = 3;
b = '3'; 
console.log(a==b);
console.log(a===b);
//user input

let str1 ="once in a blue moon,";
let str2 = "the sky looks cloudy";
console.log(str1+str2);
console.log(str1.concat(str2));
console.log(str1.repeat(2));
console.log(str1.length);
console.log(str1.slice(2,6));
console.log(str1.replace('A','once'));
console.log(str2.includes('in'));
console.log(str2.endsWith('cloudy'));
console.log(str1.lastIndexOf(18));
// ` ` --backtick used in es6
let msg =`happy
birthday`
msg  = `cats's looks cute and "lovely"`
var firstName="swathi"
var lastName = 'sri'
var city = 'pollachi'
//console.log(firstName + " " + lastName + " " + " lives in " + city);
console.log(`${firstName} ${lastName} live is ${city}`);