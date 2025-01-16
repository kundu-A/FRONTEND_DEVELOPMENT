//Basic  comparisons in the same data types.
console.log(2==2);
console.log(2>=2);
console.log(2<=2);
console.log(2<2);
console.log(2>2);
console.log(2!=2);

//But in different data types....
console.log("2">1); // it will give true as output , but this is not a good approach.

//Those types of code will create confusions , that's why we always try to avoid this types of code.
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); //true 

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); //false

// In JavaScript == operator have some special appraoch to work 

// "===" this is called Strict operator , it will not only check values but also checks the datatypes .
console.log("2"===2); // false
console.log(2===2); // true.