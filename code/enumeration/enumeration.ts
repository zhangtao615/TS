//数字枚举
enum num{
    a=1,
    b,//2
    c,//3
    d,//4
}
enum num2{
    x //0
}
interface extend{
    num1:num.a;
}
function fn(x:num):number{
    return num.a + num.b;
}