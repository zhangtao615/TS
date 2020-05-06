//for...of  循环出值 只能操作已经实现了Symbol.iterator方法的对象
// let arr = [1,2,3,4,"hello"];
// for(let values of arr){
//     console.log(values);//1,2,3,4,"hello"
// }
//for...in 循环出键  而且可以操作任何对象
var arr2 = [1, 2, 3, 4, 5];
for (var keys in arr2) {
    console.log(keys); //0,1,2,3,4
}
