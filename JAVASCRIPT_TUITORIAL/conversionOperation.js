let score="76";

console.log(typeof(score));
let value=Number(score); //This will convert string to number
console.log(typeof value);
console.log(value);

let str="23abc";
let value1=Number(str);//Here it will be converted into number , but the value will be NaN : Not a Number
console.log(typeof value1);
console.log(value1); //NaN

let input1=null;
let value2=Number(input1); //null will be converted as 0
console.log(value2); // 0

let input2=undefined;
let value3=Number(input2); //undefined will be converted as NaN.
console.log(value3); //NaN

let input3=true;
let value4=Number(input3); // true will be converted as 1 and false will be converted as 0
console.log(value4);

let isloggedIn=1;
let booleanLoggedIn=Boolean(isloggedIn); // 1 will be converted as true and 0 will be converted as false
console.log(booleanLoggedIn);

let input4="Arpan"
let value5=Boolean(input4);// A string will be converted as true.
console.log(value5);

let input5=""
let value6=Boolean(input5); // But the empty string will be converted as false.
console.log(value6);

let a=33;
let b=String(a); // number 33 => string 33
console.log(b);