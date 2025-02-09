const str=new String("I am college student");

//at() method will provide us the characters specific to that index
console.log(str.at(6));
console.log(str.at(-3));

//concate() method will concate two strings
const str1=new String(" at Sanaka")
console.log(str.concat(str1))

//endsWith() method will return true if the given string is present at the end of the original string and if not then it will return false.
console.log(str.endsWith("student"))
console.log(str1.endsWith("student"))

//lastIndexOf() method will return last index of the given character
console.log(str.lastIndexOf("am"))
console.log(str.lastIndexOf("arpan")) // it will return -1 because "arpan" is not present str.

