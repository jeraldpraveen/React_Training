var numbers = [1, 2, 3];

const plus3 = numbers.map((num) => num + 3);
console.log(plus3);

const plus4function = (num) => num + 4;
const plus4 = numbers.map(plus4function);
console.log(plus4);

// Mostly For search
const filter = (...args) => {
  return args.filter((element) => element === 1);
};
console.log(filter(1, 2, 3));
