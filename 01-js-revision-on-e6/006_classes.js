// class
class Person {
  age = 28;

  call = (myName) => `${myName}`;
}

const person = new Person();
console.log(`Person name is ${person.call("Jerald")} and age is ${person.age}`);

// Inheritance
class Human {
  constructor() {
    this.gender = "male";
  }

  printGender = () => console.log(`Gender is Male`);
}

class Employee extends Human {
  constructor() {
    super(); // This is Mandatory. Executes Parent Constructor
    this.occupation = "Developer";
  }

  printOccupation = () => console.log(`Job is ${this.occupation}`);
}

const employee = new Employee();
employee.printOccupation();
employee.printGender();
