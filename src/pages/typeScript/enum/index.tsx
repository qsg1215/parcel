import React from 'react'

export default () => {

    // enum Direction {
    //     Up = 1,
    //     Down,
    //     Left,
    //     Right
    // }

    // enum Direction {
    //     Up,
    //     Down,
    //     Left,
    //     Right,
    // }

    // enum Response {
    //     No = 0,
    //     Yes = 1,
    // }
    // function respond(recipient: string, message: Response): void {
    //     // ...
    //     console.log(recipient, message)
    // }

    // respond("Princess Caroline", Response.Yes)

    // A 不是常量申明复制的, 所以B必须初始化
    // function getSomeValue() {
    //     return 2
    // }

    // enum E {
    //     A = getSomeValue(),
    //     B, // error! 'A' is not constant-initialized, so 'B' needs an initializer
    // }

    // const AValue = 2

    // enum E {
    //     A = AValue,
    //     B, // 'B'必须初始化
    // }

    // enum Direction {
    //     Up = "UP",
    //     Down = "DOWN",
    //     Left = "LEFT",
    //     Right = "RIGHT",
    // }

    // 异构枚举  从技术的角度来说，枚举可以混合字符串和数字成员，但是似乎你并不会这么做：
    // enum BooleanLikeHeterogeneousEnum {
    //     YES = "YES",
    //     No = 0,
    // }

    // enum FileAccess {
    //     // constant members
    //     None,
    //     Read = 1 << 1,
    //     Write = 1 << 2,
    //     ReadWrite = Read | Write,
    //     // computed member
    //     G = "123".length
    // }
    // console.log(FileAccess.Write)

    // enum ShapeKind {
    //     Circle,
    //     Square,
    // }

    // interface Circle {
    //     kind: ShapeKind.Circle;
    //     radius: number;
    // }

    // interface Square {
    //     kind: ShapeKind.Square;
    //     sideLength: number;
    // }

    // let c: Circle = {
    //     kind: ShapeKind.Circle,
    //     // kind: ShapeKind.Square,
    //     //    ~~~~~~~~~~~~~~~~ Error!
    //     radius: 100,
    // }

    // enum E {
    //     Foo,
    //     Bar,
    // }

    // function f(x: E) {
    //     if (x !== E.Foo || x !== E.Bar) {

    //         //           This condition will always return 'true' since the types 'E.Foo' and 'E.Bar' have no overlap
    //         // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
    //     }
    // }

    // 运行时的枚举
    // enum E {
    //     X, Y, Z
    // }

    // function f(obj: { X: number }) {
    //     return obj.X;
    // }

    // f(E); // 0
    // 要注意的是 不会为字符串枚举成员生成反向映射。
    // enum Enum {
    //     A,
    //     B = "test"
    // }
    // let a = Enum.A;
    // let nameOfA = Enum[a];
    // let name = Enum['test'];
    // console.log(nameOfA) // "A"
    // console.log(name) // undefined

    // 外部枚举  d.ts 中声明的去全局枚举, 编译结果中没有
    // declare enum Enum {
    //     A = 1,
    //     B,
    //     C = 2
    // }





    return <div>123</div>
}