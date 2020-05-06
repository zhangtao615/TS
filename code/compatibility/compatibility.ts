// interface Name{
//     name:string
// }
// class Person{
//     name:string
// }

// let P:Name;
// p = new Person();

//如果x要兼容y，那么y至少具有与x相同的属性
// interface Named{
//     name:string
// }
// let x:Named;
// let y = {name:"Bob",age:30};
// function greet(n:Named){
//     console.log("hello" + n.name);
// }
// greet(y);

//函数兼容性
let x = (a:number) => 0;
let y = (b:number,c:string) => 0;
y = x;//true
//x = y//false
//y有两个必须的参数，x只有一个
