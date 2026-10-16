// Primitive data types or Basic
let name = "Fernanda";
let age = 34;
let isStudent= false;

// non-primitive / advance (complex)
// object literal
let student1 = {
    name: "Fernanda",
    age: 34,
    isStudent: false
};

// 1. Access to the values --> .
// objectName.property

student1.age

console.log(student1.age);
console.log(student1,name);
console.log(student1.isStudent);

// Exercise: 
// Create 2 more objects literal -> student2 and student 3.
// Print their name, age, and status (isStudent).
// Note: Values can be anything, but properties should be name, age, and isStudent.

let student3 = {
    name: "Sean",
    age: 7,
    isStudent: true 
};

console.log(student3.name);
console.log(student3,age);
console.log(student3.isStudent);



let student4 = {
    name: "Leo",
    age: 5,
    isStudent: true
};

console.log(student4.name);
console.log(student4,age);
console.log(student4.isStudent);

// New conxept: Interpolation
console.log(`Hello, may mane is ${student1.name}, I am ${student.age} years old.`);

// let can be anything

let p = document.getElementById("paragraph");

p.innerHTML = `Hello, may mane is ${student1.name}, I am ${student.age} years old.`;

// ==== Object contrsructor ====

function Student(nameValue, ageValue, isStudent){
    this.name = nameValue; // properties
    this.age = ageValue;
    this.isStudent = isStudent;
}

let student = new Student("Fernanda", 34, false);
console.log(student.name);
console.log(` $[student.age] - ${student.isStudent}`);

// Products

function Products(name, price){
    this.name = name;
    this.price = price;
}

let products = new Products("Apple", 10)
console.log(`The product is ${p.name}, and the price is ${p.price}.`);