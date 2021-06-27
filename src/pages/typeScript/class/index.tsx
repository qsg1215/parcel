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




    return (
        <div>测试</div>
    )
}


