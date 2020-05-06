//全局模块 不推荐
const foo3 = 123;//变量处于全局命名空间，其他文件也能引用


//文件模块/外部模块
//export const foo4 = 123;

//除上面一种到导出方式，还有其他方式
const foo4 = 123;
const foo5 = 123;
export {foo5};
//或者在导出时重命名
export {foo4 as foo6}
