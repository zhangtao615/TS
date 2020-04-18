//类Greeter 
// class Greeter{
//     greeting:string
//     constructor(message:string){
//         this.greeting = message;
//     }
//     greet(){
//        console.log(`Hello,${this.greeting}`) ;
//     }
// }
// let greeter = new Greeter("world");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//继承
// class Animal{
//     move(distance:number = 0){
//         console.log(`Animal moved ${distance} m`);
//     }
// }
// class Dog extends Animal{
//     bark(){
//         console.log('Woof!')
//     }
// }
// const dog = new Dog();
// dog.bark();
// dog.move(10);
// dog.bark();
//complex 继承
// class Animal{
//     name:string
//     constructor(theName:string){this.name = theName;}
//     move(distance:number = 0){
//         console.log(`${this.name} moved ${distance} m`);
//     }
// }
// class Snake extends Animal{
//     constructor(name:string){super(name);}
//     move(distance = 5){
//         console.log("Slithering...");
//         super.move(distance);
//     }
// }
// class Horse extends Animal{
//     constructor(name:string){super(name);}
//     move(distance = 45){
//         console.log("Galloping...");
//         super.move(distance);
//     }
// }
// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");
// sam.move();
// tom.move(34);
//private修饰符
// class Animal{
//     private name:string
//     constructor(theName:string){this.name = theName}
// }
// class Rhino extends Animal {
//     constructor() { super("Rhino"); }
// }
// class Employee {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }
// let animal = new Animal("Goat");
// let rhino = new Rhino();
// let employee = new Employee("Bob");
// animal = employee;//Error
//protected修饰符
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee;
}(Person));
var howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); //错误
