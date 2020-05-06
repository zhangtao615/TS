class Student{
    fullName:string;
    constructor(public firstName,public middleInital,public lastName){
        this.fullName = firstName +''+ middleInital +''+ lastName;
    }
}

interface Person{
    firstName:string
    lastName:string
}

function greeter(person:Person){
    return "hello" + person.firstName + person.lastName;
}
let user = new Student("Jane","C.","User");
console.log(greeter(user))