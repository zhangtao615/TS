namespace Unit{
    export function log(msg){
        console.log(msg);
    }
    export function error(msg){
        console.log(msg)
    }
}
//namespace可以嵌套
Unit.log('Hello');
Unit.error("Error");