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
// function Car(make, model, year, color) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.Drive = function () {
//     console.log(`${this.make} ${this.model} is driving`);
//   };
// }

// const car1 = new Car("Audi", "Q4", 2024, "red");
// console.log(car1.make);
// car1.Drive();

// classes = provides a more structured and clear way to
// to work with objects compared to traditional consturctor functions ,
// static keywords, inheritance

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
//   // inside a class don't need to use the keyword function
//   displayProduct() {
//     console.log(`${this.name} costs ${this.price}`);
//   }

//   calculateTotal(salesTax) {
//     return this.price + this.price * salesTax;
//   }
// }

// const product1 = new Product("Apple", 100);

// const salesTax = 0.1;
// product1.calculateTotal(salesTax);
// product1.displayProduct();

// static keywords = methods that belong to the class itself,
// not to the instances of the class (class owns anything static, not the object )

// class MathUtils{
// static PI = 3.1415926;
// static getDiameter(radius){
//     return radius * 2;
// }
// static getcircumference(radius){
//     return 2 * this.PI * radius;
// }
// static getArea(radius){
//     return this.PI * radius ** 2;
// }
// }

// console.log(MathUtils.PI); // don't need to create an instance of MathUtils
// console.log(MathUtils.getDiameter(5));
// console.log(MathUtils.getcircumference(5));
// console.log(MathUtils.getArea(5));

// class User{
//     static userCount = 0;
//     constructor(username){
//         this.username = username;
//         User.userCount++;
//     }
//     sayHello(){
//         console.log(`Hi I am ${this.username}`);
//     }
//     static getUserCount(){
//         console.log(`There are ${User.userCount} users`);
//     }
// }

// const user1 = new User("julyx");
// console.log(user1.username);
// console.log(User.userCount); // userCount is static, that's why need to use the name of the class to get access to it
// user1.sayHello();
// User.getUserCount();

//inheretance = allows a new class to inherit properties
// and methods from an existing class(parent->child)
//helps with code reusability

// class Animal {
//   alive = true;
//   eat() {
//     console.log(`this ${this.name} is eating`);
//   }
//   sleep() {
//     console.log(`this ${this.name} is sleeping`);
//   }
// }

// class Rabbit extends Animal {
//   name = "rabbit";
//   run(){
//     console.log(`this ${this.name} is running`);
//   }
// }

// class Fish extends Animal {
//   name = "fish";
//   swim(){
//     console.log(`this ${this.name} is swimming`);
//   }
// }
// class Hawk extends Animal {
//   name = "hawk";
//   fly(){
//     console.log(`this ${this.name} is flying`);
//   }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// rabbit.eat();
// fish.eat();
// console.log(hawk.name);

//super = keyword is used in classes to call the constructor or access the properites
// and methods of the parent (supercalss)
// this = this object
// super = the parent

// class Animal{
//     constructor(){

//     }
// }

// class Rabbit extends Animal{
//     constructor(name, age, runSpeed){
//         this.name = name;
//         this.age = age;
//         this.runSpeed = runSpeed;

//     }

// }
// class Fish extends Animal{
//     constructor(name, age, swimSpeed){
//         this.name = name;
//         this.age = age;
//         this.swimSpeed = swimSpeed;
//     }

// }
// class Hawk extends Animal{
//     constructor(name, age, flySpeed){
//         this.name = name;
//         this.age = age;
//         this.flySpeed = flySpeed;
//     }
// }

// const rabbit = new Rabbit("foofoo", 1, 10);
// const fish = new Fish("barbar", 2, 5);
// const hawk = new Hawk("hawk", 3, 80);

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   move(speed) {
//     console.log(`${this.name} is moving at ${speed} km/h`);
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, age, runSpeed) {
//     super(name, age);
//     this.runSpeed = runSpeed;
//   }
//   run() {
//     console.log(`${this.name} is running`);
//     super.move(this.runSpeed);
//   }
// }

// class Fish extends Animal {
//   constructor(name, age, swimSpeed) {
//     super(name, age);
//     this.swimSpeed = swimSpeed;
//   }
//   swim() {
//     console.log(`${this.name} is swimming`);
//     super.move(this.swimSpeed);
//   }
// }

// class Hawk extends Animal {
//   constructor(name, age, flySpeed) {
//     super(name, age);
//     this.flySpeed = flySpeed;
//   }

//   fly() {
//     console.log(`${this.name} is flying`);
//     super.move(this.flySpeed);
//   }
// }

// const rabbit = new Rabbit("foofoo", 2, 10);
// console.log(rabbit.name);
// rabbit.run();

//getters and setters
//getters = methods that return the value of a property
//setters = methods that set the value of a property
// validate and modify a value when reading/writing a property

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  set width(widthvalue) {
    if (widthvalue > 0) {
      this._width = widthvalue;
      //using _ to hide the property from the outside
    } else {
      console.error("Width must be greater than 0");
    }
  }
  set height(heightvalue) {
    if (heightvalue > 0) {
      this._height = heightvalue;
      //using _ to hide the property from the outside
    } else {
      console.error("Height must be greater than 0");
    }
  }
  get width() {
    return `${this._width.toFixed(1)}cm`;
  }
  get height() {
    return `${this._height.toFixed(1)}cm`;
  }
}

const rec = new Rectangle(10, 20);
console.log(rec.width);
console.log(rec.height);


class Person{
    constructor(fullname, age){
        this.fullname = fullname;
        this.age = age;
    }
    set age(agevalue){
        if(0<agevalue && agevalue<120){
            this._age = agevalue;
    }else{
        console.error("Age must be between 0 and 120");
    }
}

    set fullname(namevalue){
       if (typeof namevalue === `string`&& namevalue.length>0){
        this._name = namevalue;
       }else{
        console.error("Fullname must be a string and longer than 0");
       }
    }
  get fullname(){
    return this._name;
  }
 get age(){
    return this._age;
 }

 }
    
