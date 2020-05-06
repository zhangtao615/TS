//ts 有两种声明空间：类型声明空间和变量声明空间

//类型声明空间
class Foo { }
interface Bar { }//不能作为变量使用
type Bas = { }

//或者将类作为注解
let foo:Foo
let bar:Bar
let bas:Bas

//变量声明空间
class Foo2 { }
const SomeVar = Foo2;
const otherVar = 123; 

//const bar2 = foo3//foo3为 模块.ts 中变量

import {foo6} from './模块' //文件模块中的变量需用import导入才可以用
const bar3 = foo6;