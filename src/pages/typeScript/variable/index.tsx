import * as React from 'react'
import styles from './index.less'
import { greeter } from './utils'

export interface Props {
  name: string
  enthusiasmLevel?: number
}

function Hello({ name, enthusiasmLevel = 1 }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D')
  }
  let isDown: boolean = false
  let decLiteral: number = 6
  let hexLiteral: number = 0xf00d
  let binaryLiteral: number = 0b1010
  let octalLiteral: number = 0o744

  let name1: string = `Gene`
  let age: number = 37
  let sentence: string = `Hello, my name is ${name}.`

  let list: number[] = [1, 2, 3]
  let x: [string, number]
  x = ['2', 4]

  // enum Color { Red, Green, Blue }
  // let c: Color = Color.Green
  // console.log(c) // 1

  // enum Color { Red =8, Green, Blue }
  // let c: Color = Color.Green
  // console.log(c) // 9

  // enum Color { Red = 8, Green = 7, Blue = 9 }
  // let c: Color = Color.Green
  // console.log(c) // 7

  // enum Color { Red ="8", Green = "a", Blue = 9 }
  // let c: Color = Color.Green
  // console.log(c) // a

  enum Color {
    Red = 1,
    Green,
    Blue,
  }
  let colorName: string = Color[2]
  console.log(colorName) //Green

  // let notSure: any = 4
  // notSure = 'maybe a string instead'
  // notSure = false // okay, definitely a boolean

  let listAny: any[] = [1, true, "free"];

  function warnUser(): void {
    console.log("This is my warning message");
  }

  let unusable: void = undefined;

  let u: undefined = undefined;
  let n: null = null;

  let u1: undefined = undefined;
  let n1: null = null;

  function create(o: object | null): void {
    console.log(o)
  }
  create({ prop: 0 }); // OK
  create(null); // OK 


  // 有点像java 中的强转 子类也可以看做父类, 从不具体的类型(any, 或者联合类型)到具体的类型
  // 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”
  let someValue: any = "this is a string";
  let strLength: number = (someValue as string).length; // jsx 只能使用as 来断言

  function f() {
    var a = 10;
    return function g() {
      var b = a + 1;
      return b;
    }
  }

  var g = f();


  try {
    throw "oh no!";
  }
  catch (e) {
    console.log("Oh well.");

  }

  const o = {
    a: '234',
    b: 1
  }
  let { a, b }: { a: string, b: number } = o;
  console.log(a, b)

  // Error: 'e' doesn't exist here


  return (
    <div className={styles.hello}>
      <div className={styles.greeting}>
        Hello 23
        {greeter({
          firstName: 'chen',
          lastName: 'hauqiaio',
        })}
      </div>
    </div>
  )
}


interface WholeObject {
  a: string;
  b?: number
}

type WholeObject1 = {
  a: string;
  b?: number
}

function keepWholeObject(wholeObject: WholeObject1) {
  let { a, b = 1001 } = wholeObject;
  console.log(a, b)
}


keepWholeObject({ a: '123', b: 123 })

// 合并申明
interface User {
  name: string
  age: number
}

interface User {
  sex: string
}

function createUser(user: User): void {
  console.log(user)
}

createUser({
  name: '23',
  age: 12,
  sex: 'nan'
})

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;

console.log(ro, 'ro')

interface SquareConfig {
  color?: string;
  width?: number;
  // [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: '123',
    area: 20
  }
  // ...
}

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}
mySearch("123", "23")


let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig);
// let mySquare1 = createSquare({ colour: "red", width: 100, xx: 3 }); // 不报错, 添加任意属性, 绕过检查
let mySquare1 = createSquare({ color: "red", width: 100 }); // 报错


// 描述类和类的构造器
interface ClockConstructor {
  new(hour: number, minute: number);
}

interface ClockInterface {
  tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log("beep beep");
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);


// class Clock implements ClockConstructor {
//   currentTime: Date;
//   constructor(h: number, m: number) { }
// }


export default Hello
