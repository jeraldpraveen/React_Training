const fruitsArray = ["apple", "orange", "banana"];

for (let value of fruitsArray) {
  console.log(value);
}

const fruitMap = {
  pear: 13,
  cherry: 17,
  melon: 15,
};
//For getting key in map
for (let key in fruitMap) {
  console.log(key);
}
//For getting values in map
for (let key in fruitMap) {
  console.log(fruitMap[key]);
}

// Array --> Group Of Object -----> for_of
// Map --> Values In Map ----> for_in
