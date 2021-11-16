// A variable can hold one of two value types: primitive values or reference values.
// Primitive values are data that are stored on the stack.
// Primitive value is stored directly in the location that the variable accesses.
// Reference values are objects that are stored in the heap.
// Reference value stored in the variable location is a pointer to a location in memory where the object is stored.
// Primitive types include Undefined, Null, Boolean, Number, or String.

//primitive : the value is stored by call-by-value
var name1 = "Jerald";
var nameCopy = name1;
console.log("name1", name1);
console.log("nameCopy", nameCopy);
name1 = "Praveen";
console.log("name1", name1);
console.log("nameCopy", nameCopy);
//NameCopy will not be affected by change of  the name1
//.....................................
//reference: the value is stored by call-by-reference
var user = {
  name1: "Jerald",
};

const userCopy = user;
console.log("user", user);
console.log("userCopy", userCopy);
user.name1 = "Praveen";
console.log("user", user);
console.log("userCopy", userCopy);

//Comment Above code block or below code block

// user and userCopy are different
// const userCopy1 = {...user};
// console.log('user', user);
// console.log('userCopy1', userCopy1);
// user.name1 = "Praveen";
// console.log('user', user);
// console.log('userCopy1', userCopy1);
