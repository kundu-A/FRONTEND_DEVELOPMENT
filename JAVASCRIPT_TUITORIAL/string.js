const name="Arpan"
const age=22
console.log("But this is not a good approach ");
console.log(name+" "+age);
console.log("In today's convension we follow this (using backticks) , This is called String Interpolation: ");
console.log(`My name is ${name} and my age is ${age}`)
const gameName=new String("Arpan"); //Here this value is stored as key:value pair
/*
0:"A"
1:"r"
2:"p"
3:"a"
4:"n"
*/
console.log(gameName[0])
console.log(gameName.__proto__) //By doing this we can see the prototype of that variable : two underscore then proto then two underscore.
console.log(gameName.toUpperCase()) // convert into uppercase 
console.log(gameName.charAt(4)) // print the 4th indexed character
console.log(gameName.indexOf('n')) // Here we can see the index of that given character.
console.log(gameName.substring(0,3)) // 0 is the starting index and 3 is the last index and from 0th to (n-1)th indexed value will be included and nth value will be included . here we can't give it negetive index , because it ignore this index and start from 0th index.
console.log(gameName.substring(-3,5))
console.log(gameName.slice(0,4))
const newString=gameName.slice(-4,4);
console.log(newString) // In the slice() method it accepts negative values as index and it will consider it from reverse direction.
const trimExplain="     ARPAN     "
console.log(trimExplain)
console.log(trimExplain.trim()) //It remove white spaces frm start to end of a string.
const url="https://arpan.com/arpan%20kundu"
console.log(url)
console.log(url.replace('%20','-'))
console.log(url.includes('arpan'))
console.log(url.includes('000'))

const splitExample=new String("Arpan kundu")
console.log(splitExample.split(' '))//It will split the string on the basis of space (which we have mentioned in the argument in the split method) and make them into arrays.

