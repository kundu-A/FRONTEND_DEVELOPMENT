const score=400
console.log(score); //400 - here by default javascript convert that score into number

const balance=new Number(100)
console.log(balance);//[Number: 100] - but here we explicitly cast that balance into number

console.log(typeof balance.toString()) // toString() is used to convert number to string.
console.log(balance.toFixed(3)); //After decimal how many digits we want that will decided by toFixed() method and we pass parameter as 3, means after decimal we will take three digits.

const number_1=12.8922
const number_2=112.8922
const number_3=1122.8922

console.log(number_1.toPrecision(3)); //12.9
console.log(number_2.toPrecision(3)); //113
console.log(number_3.toPrecision(3)); //1.12e+3


const hundreds=1000000
console.log(hundreds.toLocaleString());//It can convert that numbers into human readable form.
console.log(hundreds.toLocaleString('en-IN'));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);


