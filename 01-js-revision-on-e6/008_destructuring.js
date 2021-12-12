var person = {
  firstName: "Jerald",
  lastName: "Praveen",
  age: 50,
};

//Advantage of destructuring is you do  have to use person.firstName || person.age everytime.
// console.log(person.firstName);
// console.log(person.age);

const { firstName, age } = person;
console.log(firstName);
console.log(age);

//Instead Of the following code, we can also use destructuring
// var arr = [1,2];
// a = arr[0];
// b = arr[1];
// console.log(a);
// console.log(b);

const [a, b] = [1, 2];
console.log(a);
console.log(b);

const [c, d, ...remain] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(...remain);

const [, , e] = [1, 2, 3];
console.log(e);
