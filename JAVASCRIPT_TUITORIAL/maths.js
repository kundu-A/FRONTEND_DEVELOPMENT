console.log(Math);
console.log(Math.abs(-1)); //abs -> absolute value -> convert negative to positive
console.log(Math.round(4.6)); // 5 
console.log(Math.ceil(4.2)); //ceilling value -> 5
console.log(Math.floor(4.99)); // Floor value -> 4
console.log(Math.random()); // always generate random values in the range of 0 to 1.

console.log((Math.random()*10)+1) // by *10 we can get a single digit before decimal and to avoid 0 we add 1.
console.log(Math.floor(Math.random()*10)+1); // to remove unwanted digits after decimal we use Math.floor() .

//One interesting formula to generate random number in between a specific range
const max=20
const min=10;
console.log(Math.floor(Math.random()*(max-min+1))+min);

