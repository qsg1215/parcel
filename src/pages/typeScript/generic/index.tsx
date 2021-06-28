import React from 'react';

export default () => {

    // function identity(arg: number): number {
    //     return arg;
    // }

    // function identity(arg: any): any {
    //     return arg;
    // }

    // 格式identity<T>(arg: T): T 
    // function identity<T>(arg: T): T {
    //     return arg;
    // }

    // function identity<T, M>(parm1: T, parm2: M): void {
    //     console.log(parm1, parm2)
    //     // return parm1;
    // }


    // 注意我们没必要使用尖括号（<>）来明确地传入类型；编译器可以查看myString的值，然后把T设置为它的类型。
    // 类型推论帮助我们保持代码精简和高可读性。如果编译器不能够自动地推断出类型的话，
    // 只能像上面那样明确的传入T的类型，在一些复杂的情况下，这是可能出现的。
    // let output = identity<string>("myString");
    // 推断出来的
    // let output = identity("myString");  // type of output will be 'string'

    // function loggingIdentity<T>(arg: T): T {
    //     console.log(arg.length);  // Error: T doesn't have .length
    //     return arg;
    // }

    // function loggingIdentity<T>(arg: Array<T>): Array<T> {
    //     console.log(arg.length);  // Array has a .length, so no more error
    //     return arg;
    // }

    // loggingIdentity([1, 2, "2", true])

    // <T>(arg: T) => T 描述泛型函数
    // function identity<T>(arg: T): T {
    //     return arg;
    // }

    // let myIdentity: <T>(arg: T) => T = identity;

    // 我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以
    // function identity<T>(arg: T): T {
    //     return arg;
    // }
    // let myIdentity: <U>(arg: U) => U = identity;


    // function identity<T>(arg: T): T {
    //     return arg;
    // }

    // let myIdentity: { <T>(arg: T): T } = identity;

    // console.log(myIdentity, 'myIdentity')

    //这引导我们去写第一个泛型接口了。 我们把上面例子里的对象字面量拿出来做为一个接口：
    // interface GenericIdentityFn {
    //     <T>(arg: T): T;
    // }

    // function identity<T>(arg: T): T {
    //     return arg;
    // }

    // let myIdentity: GenericIdentityFn = identity;

    // 限制了T的类型 除了泛型接口，我们还可以创建泛型类。  注意，无法创建泛型枚举和泛型命名空间。
    // interface GenericIdentityFn<T> {
    //     (arg: T): T;
    // }

    // function identity<T>(arg: T): T {
    //     return arg;
    // }

    // let myIdentity: GenericIdentityFn<number> = identity;
    // myIdentity(2)

    // 泛型类
    // class GenericNumber<T> {
    //     zeroValue: T;
    //     // static zeroValue1: T; //  泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。
    //     add: (x: T, y: T) => T;
    // }

    // let myGenericNumber = new GenericNumber<number>();
    // myGenericNumber.zeroValue = 0;
    // myGenericNumber.add = function (x, y) { return x + y; };

    // let stringNumeric = new GenericNumber<string>();
    // stringNumeric.zeroValue = "";
    // stringNumeric.add = function (x, y) { return x + y; };

    // console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

    // 泛型约束
    // interface Lengthwise {
    //     length: number;
    // }

    // function loggingIdentity<T extends Lengthwise>(arg: T): T {
    //     console.log(arg.length);  // Now we know it has a .length property, so no more error
    //     return arg;
    // }

    // loggingIdentity({
    //     length: 1
    // })
    // loggingIdentity([])

    // 泛型约束 有相关性的约束
    // function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    //     return obj[key]
    // }
    // let x = { a: 1, b: 2, c: 3, d: 4 };

    // getProperty(x, "a"); // okay
    // getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

    // function create<T>(c: { new(): T; }): T {
    //     return new c();
    // }

    // class BeeKeeper {
    //     hasMask: boolean;
    // }

    // class ZooKeeper {
    //     nametag: string;
    // }

    // class Animal {
    //     numLegs: number;
    // }

    // class Bee extends Animal {
    //     keeper: BeeKeeper;
    // }

    // class Lion extends Animal {
    //     keeper: ZooKeeper;
    // }

    // function createInstance<A extends Animal>(c: new () => A): A {
    //     return new c();
    // }


    // createInstance(Lion).keeper.nametag;  // typechecks!
    // createInstance(Bee).keeper.hasMask;   // typechecks!





    return <div>12123</div>
}