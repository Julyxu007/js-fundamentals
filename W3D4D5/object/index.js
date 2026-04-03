// object= a collection of related properties and/or methods
// can present real world entities(people, products, places..)
// object = {key:value, function(){}}

// const person1 = {
//   firstName: "july",
//   lastName: "Xu",
//   age: 35,
//   isEmployed: true,
//   // object can also have functions
//   sayHello: function () {
//     console.log("Hi, I am july");
//   },
// };
// const person2 = {
//   firstName: "Winter",
//   lastName: "Tong",
//   age: 30,
//   isEmployed: false,
//   eat: () => console.log("I am eating salad")
// };

// console.log(person1.firstName);
// console.log(person1.sayHello());
// console.log(person2.firstName);

// this keyword
// reference to the object where THIS is used (the object depends on the immediate context)
// person.name = this.name

// wrong way:
// arrow function cannot use this keyword to refer to the object where it is called
// const person1 = {
//   username: "July",
//   favFood: "salad",
//   // sayHello:()=>console.log(`Hi I am ${name}`) // this is not right
//   sayHello: () => console.log(`Hi I am ${this.name}`),
//   // same as person1.name
//   eat: () => console.log(`${this.username} is eating ${this.favFood}`),
// };

// const person1 = {
//     username:"July",
//     favFood:"salad",
//     eat: function(){
//         console.log(`${this.username} is eating ${this.favFood}`)
//     }
// }
// person1.eat();

// Window object
//console.log(this)

// constructors= special functions for defining the properties and mehtods of objects
function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.Drive = function () {
    console.log(`${this.make} ${this.model} is driving`);
  };
}

const car1 = new Car("Audi", "Q4", 2024, "red");
console.log(car1.make);
car1.Drive();

// classes = provides a more structured and clear way to
// to work with objects compared to traditional consturctor functions ,
// static keywords, inheritance

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  // inside a class don't need to use the keyword function
  displayProduct() {
    console.log(`${this.name} costs ${this.price}`);
  }

  calculateTotal(salesTax) {
    return this.price + this.price * salesTax;
  }
}

const product1 = new Product("Apple", 100);

const salesTax = 0.1;
product1.calculateTotal(salesTax);
product1.displayProduct();
