// interface labelValue{
//     label:string;
// }
// function printLabel(labelledObj:{label:string}):void{
//     console.log(labelledObj.label);
// }
// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

//可选属性
// interface SquareValue{
//     color?:string
//     width?:number
// }
// function createSquare(value:SquareValue):{color: string; area: number}{
//     let newSquare = {color: "white",area: 100};
//     if(value.color){
//         newSquare.color = value.color;
//     }
//     if(value.width){
//         newSquare.area = value.width * value.width;
//     }
//     return newSquare;
// }
// let mySquare = createSquare({color: "black"});

//只读属性
// interface Point{
//     readonly x: number;
//     readonly y: number;
// }
// let p1 = {x:10,y:20};

// let a:number[] = [1,2,3];
// let r0:ReadonlyArray<number> = a;
// r0[1] = 4;//error

//函数类型
// interface SearchFunc{
//     (source:string,subString:string) : boolean;
// }
// let mySearch:SearchFunc;
// mySearch = function(src: string, sub: string): boolean {
//   let result = src.search(sub);
//   return result > -1;
// }

//可索引的类型
// interface StringsArray{
//     [index:number]:string
// }
// let myArray:StringsArray;
// myArray = ['zs','ls'];
// let myStr:string = myArray[0];//'zs'

// class Animal{
//     name:string
// }
// class Dog extends Animal{
//     breed:string;
// }

//类类型
// interface ColockInterface{
//     currentTime:Date
//     setTime(d:Date)
// }
// class Clock implements ColockInterface{
//     currentTime:Date;
//     setTime(d:Date){
//         this.currentTime = d;
//     }
//     constructor(h:number,m:number){}
// }

//继承接口
// interface Shape{
//     color:string
// }
// interface PenStroke{
//     penWidth:number
// }
// interface Square extends Shape,PenStroke{
//     sideLength:number;
// }
// let square = <Square>{};
// square.color = 'red';
// square.penWidth = 5.0;
// square.sideLength = 20;

//混合类型
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;