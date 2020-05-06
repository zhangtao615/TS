//ES5中的功能。支持在任意位置异步加载一个模块

//懒加载一个monment库
import('moment').then(moment=>{
    const time = moment().format();
    console.log("Typescript >= 2.4.0 Dynamic Import Expression:");
    console.log(time);
}).catch(err=>{
    console.log('模块加载失败');
})