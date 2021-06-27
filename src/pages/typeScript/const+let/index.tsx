import * as React from 'react'

export default () => {

    // var a = 10;

    // function f() {
    //     var message = "Hello, world!";

    //     return message;
    // }

    // function f() {
    //     var a = 10;
    //     return function g() {
    //         var b = a + 1;
    //         return b;
    //     }
    // }

    // var g = f();
    // g(); // returns 11;

    // function f() {
    //     var a = 1;

    //     a = 2;
    //     var b = g();  //调用的时候 拿到的a =2 所以b = 2
    //     a = 3;
    //     console.log(a)

    //     return b;

    //     function g() {
    //         return a;
    //     }
    // }
    // f()

    // function f(shouldInitialize: boolean) {
    //     // 变量声明提升
    //     if (shouldInitialize) {
    //         var x = 10;
    //     }

    //     return x;
    // }

    // f(true);  // returns '10'
    // f(false); // returns 'undefined'


    // function sumMatrix(matrix: number[][]) {  // number[][] 二维数组声明方式
    //     var sum = 0;
    //     for (var i = 0; i < matrix.length; i++) {
    //         var currentRow = matrix[i];
    //         for (var j = 0; j < currentRow.length; j++) { // 12
    //             console.log(j)
    //             sum += currentRow[j];
    //         }
    //     }

    //     return sum;
    // }

    // 内层循环修改了外层变量i, 导致只能循环一层, 得到6
    // function sumMatrix(matrix: number[][]) {
    //     var sum = 0;
    //     for (var i = 0; i < matrix.length; i++) {
    //         var currentRow = matrix[i];
    //         console.log('来了')
    //         for (var i = 0; i < currentRow.length; i++) {
    //             console.log(i)
    //             sum += currentRow[i];
    //         }
    //     }

    //     return sum;
    // }
    // var sum = sumMatrix([[1, 2, 3], [2, 3, 4]])
    // console.log(sum)

    // for (var i = 0; i < 10; i++) {
    //     setTimeout(function () { console.log(i); }, 100 * i);
    // }
    // for (var i = 0; i < 1000; i++) {
    //     setTimeout(function () { console.log(i); });
    // }

    // for (var i = 0; i < 10; i++) {
    //     // capture the current state of 'i'
    //     // by invoking a function with its current value
    //     (function (i) {
    //         setTimeout(function () { console.log(i); }, 1000 * i);
    //     })(i);
    // }

    // let hello = "Hello!";

    // function f(input: boolean) {
    //     let a = 100;

    //     if (input) {
    //         // Still okay to reference 'a'
    //         let b = a + 1;
    //         return b;
    //     }

    //     // Error: 'b' doesn't exist here
    //     return b;
    // }

    // try {
    //     throw "oh no!";
    // }
    // catch (e) {
    //     console.log("Oh well.");
    // }

    // // Error: 'e' doesn't exist here
    // console.log(e);

    // a++; // illegal to use 'a' before it's declared;
    // let a;


    // function foo() {
    //     // okay to capture 'a'
    //     console.log(a)
    //     return a;
    // }

    // // 不能在'a'被声明前调用'foo'
    // // 运行时应该抛出错误
    // foo();

    // let a;

    // function f(x) {
    //     var x;
    //     var x;

    //     if (true) {
    //         var x;
    //     }
    // }

    // let x = 10;
    // let x = 20; // 错误，不能在1个作用域里多次声明`x`

    // function f(x) {
    //     let x = 100; // error: interferes with parameter declaration
    // }

    // function g() {
    //     let x = 100;
    //     var x = 100; // error: can't have both declarations of 'x'
    // }

    // function f(condition, x) {
    //     if (condition) {
    //         let x = 100;
    //         return x;
    //     }

    //     return x;
    // }

    // f(false, 0); // returns 0
    // f(true, 0);  // returns 100

    function sumMatrix(matrix: number[][]) {
        let sum = 0;
        for (let i = 0; i < matrix.length; i++) {
            var currentRow = matrix[i];
            for (let i = 0; i < currentRow.length; i++) {
                sum += currentRow[i];
            }
        }

        return sum;
    }

    type C = { a: string, b?: number }
    function f({ a, b }: C): void {
        // ...
    }

    return (
        <div>测试</div>
    )
}



