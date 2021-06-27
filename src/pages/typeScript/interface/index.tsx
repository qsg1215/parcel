import * as React from 'react'


function Interface() {

    // 接口初探
    // function printLabel(labelledObj: { label: string }) {
    //     console.log(labelledObj.label);
    // }

    // let myObj = { size: 10, label: "Size 10 Object" };
    // printLabel(myObj);

    // interface LabelledValue {
    //     label: string;
    // }

    // function printLabel(labelledObj: LabelledValue) {
    //     console.log(labelledObj.label);
    // }

    // let myObj = { size: 10, label: "Size 10 Object" };
    // printLabel(myObj);

    // 可选属性
    // interface SquareConfig {
    //     color?: string;
    //     width?: number;
    // }

    // function createSquare(config: SquareConfig): { color: string; area: number } {
    //     let newSquare = { color: "white", area: 100 };
    //     if (config.color) {
    //         newSquare.color = config.color;
    //     }
    //     if (config.width) {
    //         newSquare.area = config.width * config.width;
    //     }
    //     return newSquare;
    // }

    // let mySquare = createSquare({ color: "black" });
    // let mySquare1 = createSquare({ color: "black", width: 12 });

    // interface SquareConfig {
    //     color?: string;
    //     width?: number;
    // }

    // function createSquare(config: SquareConfig): { color: string; area: number } {
    //     let newSquare = { color: "white", area: 100 };
    //     if (config.clor) {
    //         // Error: Property 'clor' does not exist on type 'SquareConfig'
    //         newSquare.color = config.clor;
    //     }
    //     if (config.width) {
    //         newSquare.area = config.width * config.width;
    //     }
    //     return newSquare;
    // }

    // let mySquare = createSquare({ color: "black" });

    // 只读属性
    // interface Point {
    //     readonly x: number;
    //     readonly y: number;
    // }

    // let p1: Point = { x: 10, y: 20 };
    // p1.x = 5; // error!

    // let a: number[] = [1, 2, 3, 4];
    // let ro: ReadonlyArray<number> = a;
    // ro[0] = 12; // error!
    // ro.push(5); // error!
    // ro.length = 100; // error!
    // a = ro; // error!

    // a = ro as number[];

    // 绕过接口检查(1)
    // interface SquareConfig {
    //     color?: string;
    //     width?: number;
    // }

    // function createSquare(config: SquareConfig): { color: string; area: number } {
    //     let newSquare = { color: "white", area: 100 };
    //     if (config.color) {
    //         // Error: Property 'clor' does not exist on type 'SquareConfig'
    //         newSquare.color = config.color;
    //     }
    //     if (config.width) {
    //         newSquare.area = config.width * config.width;
    //     }
    //     return newSquare;
    // }

    // let mySquare = createSquare({ colour: "red", width: 100 });
    // let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

    // 绕过接口检查(2)
    // interface SquareConfig {
    //     color?: string;
    //     width?: number;
    //     [propName: string]: any;
    // }

    // function createSquare(config: SquareConfig): { color: string; area: number } {
    //     let newSquare = { color: "white", area: 100 };
    //     if (config.color) {
    //         // Error: Property 'clor' does not exist on type 'SquareConfig'
    //         newSquare.color = config.color;
    //     }
    //     if (config.width) {
    //         newSquare.area = config.width * config.width;
    //     }
    //     return newSquare;
    // }

    // let mySquare = createSquare({ colour: "red", width: 100 });
    // let mySquare1 = createSquare({ colour: "red", width: 100, area: 1 });

    // 绕过接口检查(3)
    // interface SquareConfig {
    //     color?: string;
    //     width?: number;
    // }

    // function createSquare(config: SquareConfig): { color: string; area: number } {
    //     let newSquare = { color: "white", area: 100 };
    //     if (config.color) {
    //         // Error: Property 'clor' does not exist on type 'SquareConfig'
    //         newSquare.color = config.color;
    //     }
    //     if (config.width) {
    //         newSquare.area = config.width * config.width;
    //     }
    //     return newSquare;
    // }

    // let squareOptions = { colour: "red", width: 100 };
    // let mySquare = createSquare(squareOptions);

    // 函数接口(函数的参数名不需要与接口里定义的名字相匹配)
    // interface SearchFunc {
    //     (source: string, subString: string): boolean;
    // }

    // let mySearch: SearchFunc;
    // mySearch = function (source: string, subString: string) {
    //     let result = source.search(subString);
    //     return result > -1;
    // }

    // let mySearch: SearchFunc;
    // mySearch = function (src: string, sub: string): boolean {
    //     let result = src.search(sub);
    //     return result > -1;
    // }

    // 自动推断函数类型
    // let mySearch: SearchFunc;
    // mySearch = function (src, sub) {
    //     let result = src.search(sub);
    //     return result > -1;
    // }

    // 可索引的类型(TypeScript支持两种索引签名：字符串和数字。 
    // 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。
    // 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。)
    // 换一句话说就是 字符串索引的返回值是父类, 范围更大小
    // 数字索引的返回值是子类, 范围更大小

    // interface StringArray {
    //     [index: number]: string;
    // }

    // let myArray: StringArray;
    // myArray = ["Bob", "Fred"];

    // let myStr: string = myArray[0];

    // 可索引的类型
    // class Animal {
    //     name: string;
    // }
    // class Dog extends Animal {
    //     breed: string;
    // }

    // good
    // interface NotOkay {
    //     [x: number]: Dog;
    //     [x: string]: Animal;
    // }

    // bad
    // interface NotOkay {
    //     [x: number]: Animal;
    //     [x: string]: Dog;
    // }

    // interface NumberDictionary {
    //     [index: string]: Dog;// 范围不能比后面的任意一个类型小
    //     length: Dog;
    //     name: Animal
    // }

    // interface NumberDictionary {
    //     [index: string]: Animal;// 范围要最大
    //     length: Dog;
    //     name: Dog
    // }



    // 不知道 name 和其其他类型到底返回哪一个类型, 冲突了(bad)
    // interface NumberDictionary {
    //     [index: string]: number;
    //     length: number;    // 可以，length是number类型
    //     name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
    // }

    // good
    // interface NumberDictionary {
    //     [index: string]: number;
    //     length: number;    // 可以，length是number类型
    //     name: number       // 错误，`name`的类型与索引类型返回值的类型不匹配
    // }

    // 只读索引接口
    // interface ReadonlyStringArray {
    //     readonly [index: number]: string;
    // }
    // let myArray: ReadonlyStringArray = ["Alice", "Bob"];
    // myArray[1] = "23"
    // const aa = myArray[2];

    // 实现型接口
    // interface ClockInterface {
    //     currentTime: Date;
    // }

    // class Clock implements ClockInterface {
    //     currentTime: Date;
    //     constructor(h: number, m: number) { }
    // }


    // interface ClockInterface {
    //     currentTime: Date;
    //     setTime(d: Date);
    // }

    // class Clock implements ClockInterface {
    //     constructor(h: number, m: number) { }
    //     currentTime: Date;
    //     setTime(d: Date) {
    //         this.currentTime = d;
    //     }

    // }

    // 构造函数的描述

    // bad
    // interface ClockConstructor {
    //     new(hour: number, minute: number);
    // }

    // class Clock implements ClockConstructor {
    //     currentTime: Date;
    //     constructor(h: number, m: number) { }
    // }


    // 正确描述构造函数
    // interface ClockConstructor {
    //     new(hour: number, minute: number): ClockInterface;
    // }

    // interface ClockInterface {
    //     tick();
    // }

    // function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    //     return new ctor(hour, minute);
    // }

    // class DigitalClock implements ClockInterface {
    //     constructor(h: number, m: number) { }
    //     tick() {
    //         console.log("beep beep");
    //     }
    // }
    // class AnalogClock implements ClockInterface {
    //     constructor(h: number, m: number) { }
    //     tick() {
    //         console.log("tick tock");
    //     }
    // }


    // let digital = createClock(DigitalClock, 12, 17);
    // let analog = createClock(AnalogClock, 7, 32);

    //  接口继承(继承一个)
    // interface Shape {
    //     color: string;
    // }

    // interface Square extends Shape {
    //     sideLength: number;
    // }
    // let square = {} as Square; //  ts 和 tsx 都兼容的写法
    // // let square = <Square>{ }; // ts 写法

    // square.color = "blue";
    // square.sideLength = 10;

    //  接口继承(继承多个)
    // interface Shape {
    //     color: string;
    // }
    // interface PenStroke {
    //     penWidth: number;
    // }
    // interface Square extends Shape, PenStroke {
    //     sideLength: number;
    // }
    // let square = {} as Square;
    // square.color = "blue";
    // square.sideLength = 10;
    // square.penWidth = 5.0;

    // interface Counter {
    //     (start: string): string;
    //     interval: number;
    //     reset(): void;
    // }

    // function getCounter(): Counter {
    //     let counter = function (start: string) { } as Counter;//   counter 是个函数对象 中的某一个属性
    //     console.dir(counter, 'counter')
    //     counter.interval = 123;
    //     counter.reset = function () { };
    //     return counter;
    // }

    // let c = getCounter();
    // c('123');
    // c.reset();
    // c.interval = 5.0;

    // 接口继承类
    // class Control {
    //     private state: any;
    // }

    // interface SelectableControl extends Control {
    //     select(): void;
    // }

    // interface SelectableControl1 {
    //     select(): void;
    // }

    // class Button extends Control implements SelectableControl {
    //     select() { }
    // }

    // class TextBox extends Control {

    //     select() { }
    // }

    // 只有control 的子类才能实现SelectableControl接口
    // class Image implements SelectableControl {
    //     select() { }
    // }

    // class Image extends Control implements SelectableControl {
    //     select() { }
    // }




    return (
        <div>测试</div>
    )
}



export default Interface
