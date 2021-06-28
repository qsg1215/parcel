import * as React from 'react'

export default () => {

    // class Greeter {
    //     greeting: string;
    //     constructor(message: string) {
    //         this.greeting = message;
    //     }
    //     greet() {
    //         return "Hello, " + this.greeting;
    //     }
    // }

    // let greeter = new Greeter("world");

    // class Animal {
    //     move(distanceInMeters: number = 0) {
    //         console.log(`Animal moved ${distanceInMeters}m.`);
    //     }
    // }

    // class Dog extends Animal {
    //     bark() {
    //         console.log('Woof! Woof!');
    //     }
    // }

    // const dog = new Dog();
    // dog.bark();
    // dog.move(10);
    // dog.bark();

    //重写父类的方法
    // class Animal {
    //     name: string;
    //     constructor(theName: string) { this.name = theName; }
    //     move(distanceInMeters: number = 0) {
    //         console.log(`${this.name} moved ${distanceInMeters}m.`);
    //     }
    // }

    // class Snake extends Animal {
    //     constructor(name: string) { super(name); }
    //     move(distanceInMeters = 5) {
    //         console.log("Slithering...");
    //         super.move(distanceInMeters);
    //     }
    // }

    // class Horse extends Animal {
    //     constructor(name: string) { super(name); }
    //     move(distanceInMeters = 45) {
    //         console.log("Galloping...");
    //         super.move(distanceInMeters);
    //     }
    // }

    // let sam = new Snake("Sammy the Python");
    // let tom: Animal = new Horse("Tommy the Palomino");

    // sam.move();
    // tom.move(34);


    // class Animal {
    //     public name: string;
    //     public constructor(theName: string) { this.name = theName; }
    //     public move(distanceInMeters: number) {
    //         console.log(`${this.name} moved ${distanceInMeters}m.`);
    //     }
    // }

    // class Animal {
    //     private name: string;
    //     constructor(theName: string) { this.name = theName; }
    // }


    // new Animal("Cat").name; // 错误: 'name' 是私有的.

    // class Animal {
    //     private name: string;
    //     constructor(theName: string) { this.name = theName; }
    // }

    // class Rhino extends Animal {
    //     constructor() { super("Rhino"); }
    // }

    // class Employee {
    //     private name: string;
    //     constructor(theName: string) { this.name = theName; }
    // }

    // let animal = new Animal("Goat");
    // let rhino = new Rhino();
    // let employee = new Employee("Bob");

    // animal = rhino;
    // animal = employee; // 错误: Animal 与 Employee 不兼容.

    // class Person {
    //     protected name: string;
    //     constructor(name: string) { this.name = name; }
    // }

    // class Employee extends Person {
    //     private department: string;

    //     constructor(name: string, department: string) {
    //         super(name)
    //         this.department = department;
    //     }

    //     public getElevatorPitch() {
    //         return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    //     }
    // }

    // let howard = new Employee("Howard", "Sales");
    // console.log(howard.getElevatorPitch());
    // console.log(howard.name); // 错误 Property 'name' is protected and only accessible within class 'Person' and its subclasses.ts(2445)


    // class Person {
    //     protected name: string;
    //     protected constructor(theName: string) { this.name = theName; }
    // }

    // // Employee 能够继承 Person
    // class Employee extends Person {
    //     private department: string;

    //     constructor(name: string, department: string) {
    //         super(name);
    //         this.department = department;
    //     }

    //     public getElevatorPitch() {
    //         return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    //     }
    // }

    // let howard = new Employee("Howard", "Sales");
    // let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的. 只能通过只类构造

    // class Octopus {
    //     readonly name: string;
    //     readonly numberOfLegs: number = 8;
    //     constructor(theName: string) {
    //         this.name = theName;
    //     }
    // }
    // let dad = new Octopus("Man with the 8 strong legs");
    // dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
    // dad.numberOfLegs = 2.

    // class Octopus {
    //     readonly numberOfLegs: number = 8;
    //     constructor(readonly name: string) {
    //     }
    // }

    // class Octopus1 {
    //     readonly name: string
    //     constructor(theName: string) {
    //         this.name = theName
    //     }
    // }


    // class Employee {
    //     fullName: string;
    // }

    // let employee = new Employee();
    // employee.fullName = "Bob Smith";
    // if (employee.fullName) {
    //     console.log(employee.fullName);
    // }

    // let passcode = "secret passcode1";

    // class Employee {
    //     private _fullName: string;

    //     get fullName(): string {
    //         return this._fullName;
    //     }

    //     set fullName(newName: string) {
    //         if (passcode && passcode == "secret passcode") {
    //             this._fullName = newName;
    //         }
    //         else {
    //             console.log("Error: Unauthorized update of employee!");
    //         }
    //     }
    // }

    // let employee = new Employee();
    // employee.fullName = "Bob Smith";
    // if (employee.fullName) {
    //     alert(employee.fullName);
    // }

    // 静态属性
    // class Grid {
    //     static origin = { x: 0, y: 0 };
    //     constructor(public scale: number) { }
    //     calculateDistanceFromOrigin(point: { x: number; y: number; }) {
    //         let xDist = (point.x - Grid.origin.x);
    //         let yDist = (point.y - Grid.origin.y);
    //         return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    //     }
    // }

    // let grid1 = new Grid(1.0);  // 1x scale
    // let grid2 = new Grid(5.0);  // 5x scale

    // 抽象类, 抽象方法必须在子类中实现, 不能直接实例化抽象类, 抽象类中的方法可以被复写, 派生类不能自定义方法

    // abstract class Animal {
    //     abstract makeSound(): void;
    //     move(): void {
    //         console.log('roaming the earch...');
    //     }
    // }

    // abstract class Department {

    //     constructor(public name: string) {
    //     }

    //     printName(): void {
    //         console.log('Department name: ' + this.name);
    //     }

    //     abstract printMeeting(): void; // 必须在派生类中实现

    //     generateReports(): void {

    //     }
    // }

    // class AccountingDepartment extends Department {

    //     constructor() {
    //         super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    //     }

    //     printMeeting(): void {
    //         console.log('The Accounting Department meets each Monday at 10am.');
    //     }

    //     generateReports(): void {
    //         console.log('Generating accounting reports...');
    //     }
    // }

    // let department: Department; // 允许创建一个对抽象类型的引用
    // // department = new Department(); // 错误: 不能创建一个抽象类的实例
    // department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
    // department.printName();
    // department.printMeeting();
    // console.dir(department, 'department')
    // department.generateReports(); // 错误: 方法在声明的抽象类中不存在,


    // class Greeter {
    //     greeting: string;
    //     constructor(message: string) {
    //         this.greeting = message;
    //     }
    //     greet() {
    //         return "Hello, " + this.greeting;
    //     }
    // }

    // let greeter: Greeter;
    // greeter = new Greeter("world");
    // console.log(greeter.greet());

    // class Greeter {
    //     static standardGreeting = "Hello, there";
    //     greeting: string;
    //     greet() {
    //         if (this.greeting) {
    //             return "Hello, " + this.greeting;
    //         }
    //         else {
    //             return Greeter.standardGreeting;
    //         }
    //     }
    // }

    // let greeter1: Greeter;
    // greeter1 = new Greeter();
    // console.log(greeter1.greet());

    // // 1、typeof 用在TypeScript 中，含义跟JavaScript中不同。不再简单的表示 跟在它后面的值的类型。
    // // 2、let instance: ClassA; 表示的是 instance 的类型是ClassA的实例。
    // // 3、let classA: typeof ClassA; 表示的是 classA 的类型就是 ClassA。

    // let greeterMaker: typeof Greeter = Greeter;
    // greeterMaker.standardGreeting = "Hey there!";

    // let greeter2: Greeter = new greeterMaker();
    // console.log(greeter2.greet());

    // class Point {
    //     x: number;
    //     y: number;
    // }

    // interface Point3d extends Point {
    //     z: number;
    // }

    // let point3d: Point3d = { x: 1, y: 2, z: 3 };

    return (
        <div>测试</div>
    )
}


