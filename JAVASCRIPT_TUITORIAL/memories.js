//There are two types of memory available , Stack and Heap.
//All the primitive datatypes access Stack area and all the non primittive datatypes access Heap area.

//Those are Primitive type and use Stack to save those data.
let a="A"
let b=a
b="B"
console.log(a)//output=A
console.log(b)//output=B , becasue those are accessing different memory locations

//Those are Non-Primitive type and use Heap to save those data.
let user1={
    name:"abc",
    email:"abc@google.com"
}
let user2=user1;
user2.email="xyz@gmail.com"
console.log(user1.email) //output="xyz@gmail.com"
console.log(user2.email) ////output="xyz@gmail.com" , because those are accessing the same memory locaions