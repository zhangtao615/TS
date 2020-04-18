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
class Person{
    protected name:string
    constructor(name:string){this.name = name;}
}
class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
//console.log(howard.name); 错误