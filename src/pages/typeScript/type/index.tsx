import React from 'react'

export default () => {

    // interface Named {
    //     name: string;
    // }

    // class Person {
    //     name: string;
    // }

    // let p: Named;
    // // let p: Person;
    // // OK, because of structural typing
    // p = new Person();

    // interface Named {
    //     name: string;
    // }

    // let x: Named;
    // // y's inferred type is { name: string; location: string; }
    // let y = { name: 'Alice', location: 'Seattle' };
    // x = y;


    // interface Named {
    //     name: string;
    // }
    // // y's inferred type is { name: string; location: string; }
    // let y = { name: 'Alice', location: 'Seattle' };

    // function greet(n: Named) {
    //     console.log('Hello, ' + n.name);
    // }
    // greet(y); // OK

    // 要查看x是否能赋值给y，首先看它们的参数列表。 (参数少的, 兼容参数多的)
    // x的每个参数必须能在y里找到对应类型的参数。 注意的是参数的名字相同与否无所谓，只看它们的类型。 这里，x的每个参数在y中都能找到对应的参数，所以允许赋值
    // let x = (a: number) => 0;
    // let y = (b: number, s: string) => 0;

    // y = x; // OK
    // x = y; // Error


    // let x = () => ({ name: 'Alice' });
    // let y = () => ({ name: 'Alice', location: 'Seattle' });

    // x = y; // OK
    // y = x; // Error, because x() lacks a location property // 类型系统强制源函数的返回值类型必须是目标函数返回值类型的子类型。

    // enum EventType { Mouse, Keyboard }

    // interface Event { timestamp: number; }
    // interface MouseEvent extends Event { x: number; y: number }
    // interface KeyEvent extends Event { keyCode: number }




    // function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    //     /* ... */
    // }
    // listenEvent(EventType.Mouse, (e: Event) => console.log(
    //     (e as MouseEvent).x + ',' + (e as MouseEvent).y)
    // );

    // let handlerFunc = (e: MouseEvent) => console.log(e.x + ',' + e.y)
    // listenEvent(EventType.Mouse, handlerFunc);

    // listenEvent(EventType.Mouse, (e: number) => console.log(e));

    // function invokeLater(args: any[], callback: (...args: any[]) => void) {
    //     /* ... Invoke callback with 'args' ... */
    // }

    // // Unsound - invokeLater "might" provide any number of arguments
    // invokeLater([1, 2], (x, y) => console.log(x + ', ' + y));

    // // Confusing (x and y are actually required) and undiscoverable
    // invokeLater([1, 2], (x?, y?) => console.log(x + ', ' + y));

    // 枚举类型与数字类型兼容，并且数字类型与枚举类型兼容。不同枚举类型之间是不兼容的。比如，

    // enum Status { Ready, Waiting };
    // enum Color { Red, Blue, Green };

    // let status = Status.Ready;
    // status = Color.Green;  // Error

    // class Animal {
    //     feet: number;
    //     constructor(name: string, numFeet: number) { }
    // }

    // class Size {
    //     feet: number;
    //     constructor(numFeet: number) { }
    // }

    // let a: Animal;
    // let s: Size;

    // a = s;  // OK
    // s = a;  // OK

    return <div>123</div>
}