import * as React from 'react'

export default () => {

    // function add(x, y) {
    //     return x + y;
    // }

    // // Anonymous function
    // let myAdd = function (x, y) { return x + y; };

    // let z = 100;

    // function addToZ(x, y) {
    //     return x + y + z;
    // }

    // function add(x: number, y: number): number {
    //     return x + y;
    // }

    // let myAdd = function (x: number, y: number): number { return x + y; };

    //书写完整函数类型
    // let myAdd: (x: number, y: number) => number =
    //     function (x: number, y: number): number { return x + y; };

    // let myAdd: (baseValue: number, increment: number) => number =
    //     function (x: number, y: number): number { return x + y; };

    //

    // myAdd has the full function type
    // let myAdd = function (x: number, y: number): number { return x + y; };

    // 参数类型推断
    // The parameters `x` and `y` have the type number
    // let myAdd: (baseValue: number, increment: number) => number =
    //     function (x, y) { return x + y; };

    // 可选参数 可选参数必须跟在必须参数后面。 如果上例我们想让first name是可选的，那么就必须调整它们的位置，把first name放在后面。
    // function buildName(firstName: string, lastName?: string) {
    //     if (lastName)
    //         return firstName + " " + lastName;
    //     else
    //         return firstName;
    // }

    // let result1 = buildName("Bob");  // works correctly now
    // // let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
    // let result3 = buildName("Bob", "Adams");  // ah, just right

    // 自动推断缺省参数
    // function buildName(firstName: string, lastName = 2) {
    //     return firstName + " " + lastName;
    // }

    // let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
    // let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
    // let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
    // let result4 = buildName("Bob", "Adams");

    //  缺省值是任意数据类型
    // function buildName(firstName: string, lastName?) {
    //     return firstName + " " + lastName;
    // }

    // let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
    // let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
    // // let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
    // let result4 = buildName("Bob", 2);
    // let result5 = buildName("Bob", "123213");


    // function buildName(firstName: string, ...restOfName: string[]) {
    //     return firstName + " " + restOfName.join(" ");
    // }

    // let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

    // let deck = {
    //     suits: ["hearts", "spades", "clubs", "diamonds"],
    //     cards: Array(52),
    //     createCardPicker: function (this) {
    //         return function () {
    //             let pickedCard = Math.floor(Math.random() * 52);
    //             let pickedSuit = Math.floor(pickedCard / 13);

    //             return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    //         }
    //     }
    // }

    // let cardPicker = deck.createCardPicker();
    // let pickedCard = cardPicker();

    // alert("card: " + pickedCard.card + " of " + pickedCard.suit);



    // let deck = {
    //     suits: ["hearts", "spades", "clubs", "diamonds"],
    //     cards: Array(52),
    //     createCardPicker: function () {
    //         // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
    //         return () => {
    //             let pickedCard = Math.floor(Math.random() * 52);
    //             let pickedSuit = Math.floor(pickedCard / 13);

    //             return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    //         }
    //     }
    // }

    // let cardPicker = deck.createCardPicker();
    // let pickedCard = cardPicker();

    // alert("card: " + pickedCard.card + " of " + pickedCard.suit);


    // interface Card {
    //     suit: string;
    //     card: number;
    // }

    // interface Deck {
    //     suits: string[];
    //     cards: number[];
    //     createCardPicker(this: Deck): () => Card;
    // }

    // let deck: Deck = {
    //     suits: ["hearts", "spades", "clubs", "diamonds"],
    //     cards: Array(52),
    //     // NOTE: The function now explicitly specifies that its callee must be of type Deck
    //     createCardPicker: function (this: Deck) {
    //         return () => {
    //             let pickedCard = Math.floor(Math.random() * 52);
    //             let pickedSuit = Math.floor(pickedCard / 13);

    //             return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    //         }
    //     }
    // }

    // let cardPicker = deck.createCardPicker();
    // let pickedCard = cardPicker();

    // alert("card: " + pickedCard.card + " of " + pickedCard.suit);

    // interface UIElement {
    //     addClickListener(onclick: (this: void, e: Event) => void): void;
    // }

    // class Handler {
    //     info: string;
    //     onClickBad(this: Handler, e: Event) {
    //         // oops, used this here. using this callback would crash at runtime
    //         this.info = e.message;
    //     }
    // }
    // let h = new Handler();
    // uiElement.addClickListener(h.onClickBad); // error!

    // interface UIElement {
    //     addClickListener(onclick: (this: void, e: Event) => void): void;
    // }

    // class Handler {
    //     info: string;
    //     onClickGood(this: void, e: Event) {
    //         // can't use this here because it's of type void!
    //         console.log('clicked!');
    //     }
    // }
    // let uIElement: UIElement = {
    //     addClickListener() {

    //     }
    // };
    // let h = new Handler();

    // uIElement.addClickListener(h.onClickGood);

    // let suits = ["hearts", "spades", "clubs", "diamonds"];

    // function pickCard(x): any {
    //     // Check to see if we're working with an object/array
    //     // if so, they gave us the deck and we'll pick the card
    //     if (typeof x == "object") {
    //         let pickedCard = Math.floor(Math.random() * x.length);
    //         return pickedCard;
    //     }
    //     // Otherwise just let them pick the card
    //     else if (typeof x == "number") {
    //         let pickedSuit = Math.floor(x / 13);
    //         return { suit: suits[pickedSuit], card: x % 13 };
    //     }
    // }

    // let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
    // let pickedCard1 = myDeck[pickCard(myDeck)];
    // alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

    // let pickedCard2 = pickCard(15);
    // alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);


    // 函数重载 在定义重载的时候，一定要把最精确的定义放在最前面。
    //  注意，function pickCard(x): any并不是重载列表的一部分，因此这里只有两个重载：一个是接收对象另一个接收数字。 以其它参数调用 pickCard会产生错误。
    // let suits = ["hearts", "spades", "clubs", "diamonds"];
    // function pickCard(x: { suit: string; card: number; }[]): number;
    // function pickCard(x: number): { suit: string; card: number; };
    // function pickCard(x): any {
    //     // Check to see if we're working with an object/array
    //     // if so, they gave us the deck and we'll pick the card
    //     if (typeof x == "object") {
    //         return Math.floor(Math.random() * x.length)
    //     }
    //     // Otherwise just let them pick the card
    //     else if (typeof x == "number") {
    //         let pickedSuit = Math.floor(x / 13);
    //         return { suit: suits[pickedSuit], card: x % 13 };
    //     }
    // }

    // let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
    // let pickedCard1 = myDeck[pickCard(myDeck)];
    // console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

    // let pickedCard2 = pickCard(15);
    // // let pickedCard3 = pickCard("12"); //No overload matches this call.
    // console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);

    return (
        <div> 测试</div>
    )
}


