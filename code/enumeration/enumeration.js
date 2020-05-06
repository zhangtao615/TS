//数字枚举
var num;
(function (num) {
    num[num["a"] = 1] = "a";
    num[num["b"] = 2] = "b";
    num[num["c"] = 3] = "c";
    num[num["d"] = 4] = "d";
})(num || (num = {}));
var num2;
(function (num2) {
    num2[num2["x"] = 0] = "x"; //0
})(num2 || (num2 = {}));
function fn(x) {
    return num.a + num.b;
}
