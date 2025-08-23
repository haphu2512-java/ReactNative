"use strict";
function hello(name) {
    return `Hello, ${name}!`;
}
console.log(hello("200Lab"));
//1. Create a class Person with attributes name and age. Write a method to display this information.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log(`1.Name: ${this.name}, Age: ${this.age}`);
    }
}
const person = new Person("John Doe", 30);
person.displayInfo(); // Output: Name: John Doe, Age: 30
// 2. Write a class Student extending Person with an additional attribute grade. Add a method to
// display all info.
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    displayAllInfo() {
        console.log(`2.Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}
const student = new Student("Ha Phu", 22, 9);
student.displayAllInfo();
// 3. Create a class Car with properties brand, model, year. Write a method to show car info.
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    showCarInfo() {
        console.log(`3.Name: ${this.brand}, Age: ${this.model}, Grade: ${this.year}`);
    }
}
const car = new Car("Tesla", "Model3", 2022);
car.showCarInfo();
// 4. Create a class Rectangle with width and height. Write a method to calculate area and perimeter.
class Rectangle {
    constructor(width, height) {
        this.height = height;
        this.width = width;
    }
    calculatePerimeter() {
        return (this.height * this.width) / 2;
    }
}
const rectangle = new Rectangle(20, 20);
console.log(`4.Dien tich tam giac la: ${rectangle.calculatePerimeter()}`);
// 5. Create a class BankAccount with balance. Add methods deposit() and withdraw().
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
    display() {
        console.log(`5.Balance: ${this.balance}`);
    }
}
const acc = new BankAccount(500);
acc.display();
acc.deposit(100);
acc.display();
// 6. Create a class Book with attributes title, author, year.
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
// 7. Write a class User with private property name and getter/setter.
class User {
    constructor(name) {
        this._name = name;
    }
    // Getter for name
    get name() {
        return this._name;
    }
    // Setter for name
    set name(newName) {
        if (newName.length > 0) {
            this._name = newName;
        }
        else {
            console.log("Name must not be empty.");
        }
    }
}
const user = new User("Phu");
console.log(user.name); // Alice
user.name = "Bob";
console.log(user.name); // Bob
user.name = ""; // Invalid input
// 8. Create a Product class with name, price. Create an array of products and filter products with
// price > 100.
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
const product = [
    new Product("Laptop", 1200),
    new Product("Mouse", 25),
    new Product("Keyboard", 80),
    new Product("Monitor", 300),
    new Product("USB Cable", 10),
];
const pro = product.filter(p => p.price > 100);
console.log(pro);
// 10. Create a class Account with public, private and readonly fields.
// 11. Create a base class Animal. Extend Dog and Cat classes with methods bark() and meow().
// 12. Define interfaces Flyable and Swimmable. Implement them in Bird and Fish classes.
// 13. Create an abstract class Shape with method area(). Implement Square and Circle.
// 14. Create a base class Employee. Extend Manager and Developer with specific methods.
// 15. Create a Library class that can store Book and User objects. Add method to add books.
// 16. Create a generic class Box that can store any type of value.
// 17. Write a singleton Logger class that logs messages to console.
// 18. Create a static class MathUtil with methods add(), subtract(), multiply(), divide().
// 19. Demonstrate method overriding using polymorphism with Animal and subclasses.
// 20. Write a Vehicle interface and implement it in Car and Bike classes.
// 21. Create a generic Repository class with methods add(), getAll().
// 22. Create a class Stack with push, pop, peek, isEmpty methods.
// 23. Create an interface Payment with method pay(amount). Implement CashPayment and
// CardPayment.
// 24. Create an abstract class Appliance with method turnOn(). Implement Fan and AirConditioner.
// 25. Create a class Shape with a static method describe().
// 26. Create a class Order with list of products. Add method to calculate total price.
// 27. Create a class Teacher that extends Person. Add subject attribute and introduce method.
