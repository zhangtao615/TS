/*  说一下泛型不能用any的原因，使用any确实是可以接受任何类型的参数，
    但是忽略了一点，传入的参数类型和返回的参数类型应该是相同的
*/
// function identity<T>(arg:T):T{
//     return arg;
// }
// let output = identity<string>("Bob"); //let output = identity("Bob");

//类型变量T可以捕获传入变量的类型，当输出返回值时，也使用T，传入的参数类型和返回的参数类型是相同的

//获取参数长度之length属性

// function identityLength<T>(arg:T[]):number{//参数为数组
//     return arg.length;
// }
// function identityLength<T>(arg:Array<T>):number{
//     return arg.length;
// }

//泛型类型
// function identity<T>(arg:T):T{
//     return arg;
// }
//参数不需要完全相同，只要能对应上就行了
//let myIdentity : <T>(arg:T) => T = identity;
//let myIdentity : <U>(arg:U) => U = identity;
//let myIdentity:{<T>(arg:T):T} = identity;

//泛型接口
// interface GenericIdentityFn{
//     <T>(arg:T):T;
// }
// function identity<T>(arg:T):T{
//     return arg;
// }
// let myGenericIdentityFn:GenericIdentityFn = identity;

//泛型类
class GenericNumber<T>{
    value:T;
    add:(x:T,y:T)=>T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.value = 0;
myGenericNumber.add = function(x,y){return x+y};