//destructuring = extract values from arrays or objects
// then assigns them to variables in a convenient way
// [] = to perform array destructuring
//{} = to perform object destructuring
// ---example1---
//swap the value of two variables
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a, b); //2 1
// // ---example2---
// //swap the value of two variables in an array
// const colours = ["red", "green", "blue", "yellow"];
// [colours[0], colours[3]] = [colours[3], colours[0]];
// console.log(colours); //["yellow", "green", "blue", "red"]

//example3
//assign array elements to variables
// const colours = ["red", "green", "blue", "yellow","orange"];
// const [firstcolor, secondcolor, thirdcolor,...restColors] = colours;
// console.log(firstcolor, secondcolor, thirdcolor,restColors);
// //red green blue yellow
// console.log(restColors);
// //["yellow", "orange"]

// example4
// extract values from objects
// const person1={
//     firstname: "July",
//     lastname:"Xu",
//     email:"julyx@example.com"
// }
// const person2 = {
//     firstname:"Winter",
//     lastname:"Tong",
//     //email:"winter@example.com"
// }

// const {firstname1,lastname1,email1} = person1;
// console.log(firstname1,lastname1,email1);
// //July Xu julyx@example.com
// const{firstname2, lastname2, email2="default@example.com"} = person2;
// //Winter Tong default@example.com

// // ---example5---
// //destructure in function parameters
// function displayPerson({firstname,lastname,email}){
//     console.log(`name: ${firstname} ${lastname}`);
//     console.log(`email:${email}`)
// }

// displayPerson(person1);
//name: July Xu
//email: julyx@example.com


//nested Objects = objects inside other objects
//allow you to represent more complex data structures
// child object is enclosed in a parent object
// Person{Address{},Contact{}}
//ShoppingCart{Keyboard{},Mouse{},Monitor{}}

// const person = {
//     fullname:"July Xu",
//     age:35,
//     isStudent:true,
//     hobby:["reading","traveling"], // objects can also contain arrays
//     address:{
//         street:"123 Main St",
//         city:"New York",
//         state:"NY",
//         zip:"10001"
//     }
// }
// console.log(person.hobby[1]);//1
// console.log(person.address);
// console.log(person.address.city);

// for(const property in person.address){
//     console.log(person.address[property]);
// }


class Person{
    constructor(fullname, age, ...address){
        this.fullname = fullname;
        this.age = age;
        this.address = new Address(...address);
    }

}
class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country
    }
}

const person1 = new Person("July Xu", 35, "123 Main St", "New York", "USA")
const person2 = new Person("Winter Tong", 30, "456 Elm St", "San Francisco", "USA")
console.log(person1.address) //Address {street: '123 Main St', city: 'New York', country: 'USA'} (nested object)
console.log (person1.address.city) //New York

