function fruitColor(fruit) {
  switch (fruit) {
    case "apple": {
      let color = "red";
      return color;
    }
    case "banana": {
      let color = "yellow";
      return color;
    }
    default:
      return "others";
  }
}

console.log(fruitColor("apple"));
console.log(fruitColor("banana"));
console.log(fruitColor("mango"));
