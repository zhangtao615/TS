var Student = /** @class */ (function () {
    function Student(firstName, middleInital, lastName) {
        this.firstName = firstName;
        this.middleInital = middleInital;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInital + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "hello" + " "+person.firstName+" " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
console.log(greeter(user))
