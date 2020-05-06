// function add(x:number,y:number):number{
//     return x + y;
// }
// let myAdd: (x: number, y: number) => number =function(x: number, y: number): number { return x + y; };
// add(1,2);

//可选参数
// function man(name:string,age?:number){
//     return `His information is ${name} ${age}.`
// }
// let person1 = man('Bob',20);
// let person2 = man('john');

//this和箭头函数
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);