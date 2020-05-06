//symbol表示独一无二的值
// let s1 = Symbol("s1");
// let s2 = Symbol("s2");
// s1 === s2;//false;

//作为对象的键
const sym = Symbol();
let obj = {
    [sym] : "value"
}
console.log(obj[sym]);