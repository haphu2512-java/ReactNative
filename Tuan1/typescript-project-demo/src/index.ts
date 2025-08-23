function hello(name: string): string {
  return `Hello, ${name}!`;
}

console.log(hello("200Lab"));

//1. Create a class Person with attributes name and age. Write a method to display this information.
class Person {

  name: string;
  age: number;


  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }


  displayInfo(): void {
    console.log(`1.Name: ${this.name}, Age: ${this.age}`);
  }
}

const person = new Person("John Doe", 30);
person.displayInfo();  // Output: Name: John Doe, Age: 30


// 2. Write a class Student extending Person with an additional attribute grade. Add a method to
// display all info.
class Student extends Person{

    grade: number;
    constructor(name: string, age: number, grade:number){
        super(name,age);
        this.grade = grade;
    }

    displayAllInfo():void{
          console.log(`2.Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}

const student = new Student("Ha Phu",22 , 9);
student.displayAllInfo();



// 3. Create a class Car with properties brand, model, year. Write a method to show car info.
class Car{
    brand: String;
    model: String;
    year: number;

  constructor(  brand: String,  model: String,  year: number){
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  showCarInfo():void{
    console.log(`3.Name: ${this.brand}, Age: ${this.model}, Grade: ${this.year}`);
  }

}

const car = new Car("Tesla","Model3",2022)
car.showCarInfo();


// 4. Create a class Rectangle with width and height. Write a method to calculate area and perimeter.
class Rectangle{
    width: number;
    height: number;

    constructor( width: number,height: number){
      this.height = height;
      this.width = width;
    }
    calculatePerimeter():number{
      return (this.height * this.width)/2;
    }

}

const rectangle = new Rectangle(20,20);
console.log(`4.Dien tich tam giac la: ${rectangle.calculatePerimeter()}`);

// 5. Create a class BankAccount with balance. Add methods deposit() and withdraw().
class BankAccount{
    balance: number ;

    constructor(balance: number){
      this.balance = balance;  
    }

    deposit( amount:number ):void{
      if (amount > 0) {
        this.balance += amount;
    }
    }

    withdraw(amount:number):void{
      if (amount > 0 && amount <= this.balance) {
          this.balance-= amount;
      }
    }
    display():void{
      console.log(`5.Balance: ${this.balance}`);
    }
}
const acc =  new BankAccount(500);
acc.display();
acc.deposit(100);
acc.display();
// 6. Create a class Book with attributes title, author, year.
class Book{
    title: String;
    author: String;
    year: number;

    constructor(title: String, author: String, year: number){
      this.title = title;
      this.author = author;
      this.year = year;
    }
}


// 7. Write a class User with private property name and getter/setter.
class User {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  // Getter for name
  get name(): string {
    return this._name;
  }

  // Setter for name
  set name(newName: string) {
    if (newName.length > 0) {
      this._name = newName;
    } else {
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
class Product{
    name: String;
    price: number;
    
    constructor(name: String, price: number){
      this.name = name;
      this.price = price;
    }

}
const product: Product[]=[
  new Product("Laptop", 1200),
  new Product("Mouse", 25),
  new Product("Keyboard", 80),
  new Product("Monitor", 300),
  new Product("USB Cable", 10),
]

const pro = product.filter(p=>p.price>100);

console.log(pro);

// 9. Define an interface Animal with name and method sound().
interface Animal{
    name: String;
    sound():void;
}

// 10. Create a class Account with public, private and readonly fields.
class Account{
    public id: number;
    private balance: number;
    readonly accountNumber: String;

    constructor(id: number, balance: number, accountNumber: String){
      this.id = id;
      this.balance = balance;
      this.accountNumber = accountNumber;
    }

    getBalance():number{
      return this.balance;
    }

}

const account = new Account(1,500,"123456789");
console.log(account.getBalance());

// 11. Create a base class Animal. Extend Dog and Cat classes with methods bark() and meow().
class AnimalBase{
    name: String;

    constructor(name: String){
      this.name = name;
    }
    sound():void{
      console.log("Animal sound");
    }
}
class Dog extends AnimalBase{
    constructor(name: String){
      super(name);
    }
    bark():void{
      console.log("Woof! Woof!");
    }
}
class Cat extends AnimalBase{
    constructor(name: String){
      super(name);
    }
    meow():void{
      console.log("Meow! Meow!");
    }
}
const animalBase = new AnimalBase("Animal");
animalBase.sound();
const dog = new Dog("Buddy");
dog.bark();
const cat = new Cat("Kitty");
cat.meow();


// 12. Define interfaces Flyable and Swimmable. Implement them in Bird and Fish classes.
interface Flyable{
    fly():void;
}
interface Swimmable{
    swim():void;
}

class Bird implements Flyable{
    fly():void{
      console.log("Bird is flying");
    }
}
class Fish implements Swimmable{
    swim():void{
      console.log("Fish is swimming");
    }
}
const bird = new Bird();
bird.fly();
const fish = new Fish();
fish.swim();

// 13. Create an abstract class Shape with method area(). Implement Square and Circle.
abstract class Shape {
  abstract area(): number; 
}
// Hình vuông
class Square extends Shape {
  constructor(private side: number) {
    super();
  }
  area(): number {
    return this.side * this.side;
  }
}
// Hình tròn
class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const shapes: Shape[] = [
  new Square(5),
  new Circle(3)
];

shapes.forEach(s => {
  console.log(`Area: ${s.area()}`);
});

// 14. Create a base class Employee. Extend Manager and Developer with specific methods.
class Employee{
    name: String;
    constructor(name: String){
      this.name = name;
    }
    work():void{
      console.log(`${this.name} is working`);
    }
}
class Manager extends Employee{
    constructor(name: String){
      super(name);
    }
    manage():void{
      console.log(`${this.name} is managing`);
    }
}
class Developer extends Employee{
    constructor(name: String){
      super(name);
    }
    develop():void{
      console.log(`${this.name} is developing`);
    }
} 
const emp = new Employee("Alice");
emp.work();
const mgr = new Manager("Bob");
mgr.work();
mgr.manage(); 
const dev = new Developer("Charlie");
dev.work();
dev.develop();

// 15. Create a Library class that can store Book and User objects. Add method to add books.
class Library{
    books: Book[] = [];
    users: User[] = [];

    addBook(book: Book):void{
      this.books.push(book);
    }

    addUser(user: User):void{
      this.users.push(user);
    }
} 
const library = new Library();
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960,);
library.addBook(book1); 
library.addBook(book2);
const user1 = new User("David");
library.addUser(user1);
console.log(library.books);
console.log(library.users);
console.log(library);

// 16. Create a generic class Box that can store any type of value.
class Box<T>{
    private value: T;

    constructor(value: T){
      this.value = value;
    }

    getValue(): T{
      return this.value;
    }

    setValue(value: T): void{
      this.value = value;
    }
}
const box1 = new Box<number>(123);
console.log(box1.getValue());
const box2 = new Box<string>("Hello");
console.log(box2.getValue());

// 17. Write a singleton Logger class that logs messages to console.
class Logger{
    private static instance: Logger;

    private constructor(){}

    static getInstance(): Logger{
      if (!Logger.instance) {
        Logger.instance = new Logger();
      }
      return Logger.instance;
    }

    log(message: String):void{
      console.log(`Log: ${message}`);
    }
}
const logger1 = Logger.getInstance();
logger1.log("This is the first log message.");
const logger2 = Logger.getInstance();
logger2.log("This is the second log message.");
console.log(logger1 === logger2); // true

// 18. Create a static class MathUtil with methods add(), subtract(), multiply(), divide().
class MathUtil{
    static add(a: number, b: number): number{
      return a + b;
    }

    static subtract(a: number, b: number): number{
      return a - b;
    }

    static multiply(a: number, b: number): number{
      return a * b;
    }

    static divide(a: number, b: number): number{
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    }
}
console.log(MathUtil.add(5, 3)); // 8
console.log(MathUtil.subtract(5, 3)); // 2
console.log(MathUtil.multiply(5, 3)); // 15
console.log(MathUtil.divide(5, 1)); // Error: Cannot divide by zero


// 19. Demonstrate method overriding using polymorphism with Animal and subclasses.
class AnimalPoly{
    name: String;

    constructor(name: String){
      this.name = name;
    }
    sound():void{
      console.log("Animal sound");
    }
}
class DogPoly extends AnimalPoly{
    constructor(name: String){
      super(name);
    }
    sound():void{
      console.log("Woof! Woof!");
    }
}
class CatPoly extends AnimalPoly{
    constructor(name: String){
      super(name);
    }
    sound():void{
      console.log("Meow! Meow!");
    }
}
const animals: AnimalPoly[] = [
    new DogPoly("Buddy"),
    new CatPoly("Kitty"),
    new AnimalPoly("Generic Animal")
];
animals.forEach(animal => animal.sound());


// 20. Write a Vehicle interface and implement it in Car and Bike classes.
interface Vehicle{
    start():void;
    stop():void;
}
class CarVeh implements Vehicle{
    start():void{
      console.log("Car started");
    }
    stop():void{
      console.log("Car stopped");
    }
}
class Bike implements Vehicle{
    start():void{
      console.log("Bike started");
    }
    stop():void{
      console.log("Bike stopped");
    }
}
const carVeh = new CarVeh();
carVeh.start();
carVeh.stop();
const bike = new Bike();
bike.start();
bike.stop();

// 21. Create a generic Repository class with methods add(), getAll().
class Repository<T>{
    private items: T[] = [];

    add(item: T):void{
      this.items.push(item);
    }

    getAll(): T[]{
      return this.items;
    }
}
const repo = new Repository<number>();
repo.add(1);
repo.add(2);
console.log(repo.getAll());
const stringRepo = new Repository<string>();
stringRepo.add("Hello");
stringRepo.add("World");
console.log(stringRepo.getAll());

// 22. Create a class Stack with push, pop, peek, isEmpty methods.
class Stack<T>{
    private items: T[] = [];

    push(item: T):void{
      this.items.push(item);
    }

    pop(): T | undefined{
      return this.items.pop();
    }

    peek(): T | undefined{
      return this.items[this.items.length - 1];
    }

    isEmpty(): boolean{
      return this.items.length === 0;
    }
}
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.peek()); // 2
console.log(stack.pop()); // 2
console.log(stack.isEmpty()); // false
console.log(stack.pop()); // 1
console.log(stack.isEmpty()); // true

// 23. Create an interface Payment with method pay(amount). Implement CashPayment and
// CardPayment.
interface Payment{
    pay(amount: number):void;
}
class CashPayment implements Payment{
    pay(amount: number):void{
      console.log(`Paid ${amount} in cash`);
    }
}
class CardPayment implements Payment{
    pay(amount: number):void{
      console.log(`Paid ${amount} with card`);
    }
}
const cashPayment = new CashPayment();
cashPayment.pay(100);
const cardPayment = new CardPayment();
cardPayment.pay(200);

// 24. Create an abstract class Appliance with method turnOn(). Implement Fan and AirConditioner.
abstract class Appliance{
    abstract turnOn():void;
}
class Fan extends Appliance{
    turnOn():void{
      console.log("Fan is turned on");
    }
}
class AirConditioner extends Appliance{
    turnOn():void{
      console.log("Air Conditioner is turned on");
    }
}
const fan = new Fan();
fan.turnOn();
const ac = new AirConditioner();
ac.turnOn();

// 25. Create a class Shape with a static method describe().
class ShapeStatic{
    static describe():void{
      console.log("Shapes have area and perimeter");
    }
}
ShapeStatic.describe();

// 26. Create a class Order with list of products. Add method to calculate total price.
class Order{
    products: Product[] = [];

    addProduct(product: Product):void{
      this.products.push(product);
    }

    calculateTotalPrice(): number{
      return this.products.reduce((total, product) => total + product.price, 0);
    }
} 
const order = new Order();
order.addProduct(new Product("Laptop", 1200));
order.addProduct(new Product("Mouse", 25));
console.log(`Total Price: ${order.calculateTotalPrice()}`);

// 27. Create a class Teacher that extends Person. Add subject attribute and introduce method.
class Teacher extends Person{
    subject: string;
    constructor(name: string, age: number, subject: string){
      super(name, age);
      this.subject = subject;
    }
    introduce():void{
      console.log(`I am ${this.name}, I teach ${this.subject}`);
    }
}
const teacher = new Teacher("Mr. Smith", 40, "Math");
teacher.introduce();
teacher.displayInfo();