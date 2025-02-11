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

//endsWith() method will return true if the specific element is present at the end of the string otherwise return false.
console.log(str.endsWith("student"));//true
console.log(str.endsWith("students"));//false

//match() method is used to match a string belongs to a specific pattern.
const regex=/[A-Z]/g
console.log(str.match(regex));

//repeat() method will used to use an element multiple times
const mood="Happy "
console.log(`I am very ${mood.repeat(3)}`);

//replace() and replaceAll() methods are used to replace any element with and exsisting element.
console.log(str.replace("am" , "was"));
const para="Cat is the best animal in the world , having a Cat is blessing"
console.log(para.replaceAll("Cat","Dog"));

//substring() method is used to take a sub-string from a original string index wise.
console.log(str.substring(1,5));
console.log(str.substring(3));

//length is the property of the string to calculate the  length of the string.
console.log(str.length)
