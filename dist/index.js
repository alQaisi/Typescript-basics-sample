"use strict";
// Basic Types
let id = 10;
let company = "Ahmad Alqaisi";
let isPublished = true;
let x = "Hello";
let age;
age = 23;
let ids = [1, 2, 3, 4, 5];
ids.push(6);
let arr = [1, true, "Hello"];
//Tuple
let person = [1, "Ahmad", true];
let employee;
employee = [
    [1, "Ahmad"],
    [2, "Hamed"],
    [3, "Alqaisi"]
];
//Union
let pid = 22;
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "John"
};
//Type Assertion
let cid = "1";
let customerId = cid;
/*let customerId=cid as number*/
//Functions
function sum(x, y) {
    return x + y;
}
const sum2 = (x, y) => x + y;
console.log(sum(10, 20));
console.log(sum2(15, 20));
function log(message) {
    console.log(message);
}
log("Hello");
const user1 = {
    id: 1,
    name: "John",
};
const add = function (a, b) {
    return a + b;
};
const sub = (a, b) => a - b;
const p1 = 1;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const ahmad = new Person(1, "Ahmad Alqaisi");
console.log(ahmad.register());
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Ahmad", "Developer");
console.log(emp.name);
console.log(emp.register());
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3]);
let strArray = getArray(["Ahmad", "Hame", "Alqaisi"]);
