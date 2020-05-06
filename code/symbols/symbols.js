//symbol表示独一无二的值
// let s1 = Symbol("s1");
// let s2 = Symbol("s2");
// s1 === s2;//false;
var _a;
//作为对象的键
var sym = Symbol();
var obj = (_a = {},
    _a[sym] = "value",
    _a);
console.log(obj[sym]);
