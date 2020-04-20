//交叉类型 将多个类型合并为一个类型
// function extend<T,U>(first:T,second:U):T&U{
//     let result = <T&U>{ };
//     for(let id in first){
//         (<any>result)[id] = (<any>first)[id];
//     }
//     for(let id in second){
//         if(!result.hasOwnProperty(id)){
//             (<any>result)[id] = (<any>second)[id];
//         }
//     }
//     return result;
// }
// class Person{
//     constructor(public name:string){ }
// }
// interface Loggable{
//     log():void;
// }
// class ConsoleLogger implements Loggable{
//     log(){
//         console.log("name");
//     }
// }
// let jim = extend(new Person("Jim"), new ConsoleLogger());
// let n = jim.name;
// jim.log();

//联合类型
