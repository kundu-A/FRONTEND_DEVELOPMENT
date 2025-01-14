const accountId=12345 // This is constent value , it's not allowed to change it's value.
var accountPassword="A@123" //This is not preferrable , because of issues of block scope and functional scope , Means whenever we change the value of "var" declared variables then it will change in every places.
let accountEmail="abc@gmail.com" // "Let" resolve this issues and it is most preferrable in th recent times.
accountCity="Durgapur" //This is also not preferrable
let accountState; //It will print "undefined"

console.log("Account Id is: "+accountId)
console.table([accountId,accountEmail,accountPassword,accountCity])

accountEmail="xyz@gmail.com"
accountPassword="54321"
accountCity="Kolkata"
//accountId=653355 - we can't change this
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*
Const variables we can't modify
We always use let keyword to declare variables.
without keyword we never make any variable - bad habbit.
Variable with no values denoted as undefined.
console.table is used to print data values in table format.
*/