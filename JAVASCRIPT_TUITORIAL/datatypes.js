let person="Arpan" //String
let age=22  //Number
let isloggedIn=true // Boolean
console.table([person,age,isloggedIn])

//alert(3+3) //It is not usefull for nodeJs , it's allowed only browser.

/*
Primitive Data Types:
String => ""/''
Number => range = 2 to the power 53
For very large number we can use BigInt
Boolean=> true/false
null => Standalone value
undefined 
symbol => unique

********************************

object
 */
console.log(typeof "Arpan")
console.log(typeof age)
console.log(typeof(isloggedIn))// There are two type to use typeof.
console.log(typeof null) // null is an object
console.log(typeof undefined) // "undefined" is catagorized as "undefined"

/*
NOTES:
1.Primitive Datatypes (Call by Value):
    1.1. String 
    1.2. Number
    1.3. Boolean
    1.4. Null
    1.5. Undefined
    1.6. BigInt
    1.7. Symbol - To make something unique.
2.Non-Primitive (Call by Reference):
    2.1. Array
    2.2. Objects
    2.3. Functions
3. JavaScript is Dynamically Typed Language
*/
const id=Symbol('123');
const anotherId=Symbol('123')
console.log(id===anotherId) //It will give as false as output.Symbol makes the same thing different.Here our provided value is '123' but the Symbol returned values are different for those variables.
console.log(typeof id)

const bigNumber=643847329938932376737373664n // To make any number as BigInt we just put a n after the number.
console.log(bigNumber)

//Arrays
let myArray = ["Arpan","Kundu",22,null,true] //We can store any kind of data in the arrya.
console.log(myArray)

//objects -> {-----} is called object. And we can store it in a variable also.
let myObject={
    name:"Arpan",
    title:"Kundu",
    age:22
}
console.log(myObject)

//Function - We can store this function into a variable.
let myFunction=function(){
    console.log("Hello World!!")
}
console.log(myFunction)
console.table([typeof myArray,typeof myObject,typeof myFunction])

//All the non primitives are returning objects.
