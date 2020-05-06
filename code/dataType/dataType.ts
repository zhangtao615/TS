let name1:string = "bob";
let age:number = 20;
let sentence:string = `His name is ${name1} and his age is ${age}`;

console.log(sentence);

//Array
let list:number[] = [1,2,3];
let list2:Array<number> = [1,2,3,4]; 

//Tuple 元组
let tuple1:[number,string] = [1,'zs'];
console.log(tuple1[1].substr(1)); 
//enum 枚举
enum Color {red=1,blue,green};
let c:Color = Color.blue; // c:blue
let colorName: string = Color[2];//blue

//Any
let nothing:any = 10;
nothing = 'zs';
nothing = [1,2,3];

//void
function fn():void{ //用于没有返回值的函数
    console.log('This is a void function.');
}

let newthing:void = undefined;
let anotherthing:void = null;

//Never 永不存在的值的类型
function error(message: string): never {
    throw new Error(message);
}

//Object
declare function create (o:object | null): void;
create({pop:0});
create(null);

//类型断言
let someValue:any = 'This is a sentence.'
let len:number = (<string>someValue).length; //jsx中不允许
//let len2:number = (someValue as string)/length;

