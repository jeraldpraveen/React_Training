//WITHOUT SPREAD OPERATOR
let oldArr = [1, 2, 3];
let newArr = [oldArr, 5, 8];
console.log(newArr);

//WITH SPREAD OPERATOR
let oldArr1 = [1, 2, 3];
let newArr1 = [...oldArr1, 5, 8];
console.log(newArr1);

let oldObj = {
  name: "Perter",
  age: 16,
};

let newObj = {
  ...oldObj,
  age: 17,
};

console.log(newObj);

// REST
const enterFavoriteFruits = (...args) => {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
};

enterFavoriteFruits("apple", "orange", "banana");
