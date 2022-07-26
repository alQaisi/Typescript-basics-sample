// Basic Types

let id:number=10;
let company:string="Ahmad Alqaisi";
let isPublished:boolean=true;
let x:any="Hello";
let age:number;
age=23;

let ids:number[]=[1,2,3,4,5];
ids.push(6);

let arr:any[]=[1,true,"Hello"];

//Tuple

let person:[number,string,boolean]=[1,"Ahmad",true];

let employee:[number,string][];
employee=[
    [1,"Ahmad"],
    [2,"Hamed"],
    [3,"Alqaisi"]
];

//Union

let pid:string | number =22;

//Enum

enum Direction1{
    Up,
    Down,
    Left,
    Right
}
console.log(Direction1.Up);

enum Direction2{
    Up="Up",
    Down="Down",
    Left="Left",
    Right="Right"
}

//Objects
type User={
    id:number,
    name:string
}

const user:User={
    id:1,
    name:"John"
}

//Type Assertion

let cid:any="1";
let customerId=<number>cid
/*let customerId=cid as number*/

//Functions

function sum(x:number,y:number):number{
    return x+y;
}
const sum2=(x:number,y:number):number=>x+y;

console.log(sum(10,20));
console.log(sum2(15,20));

function log(message:string | number):void{
    console.log(message);
}
log("Hello");

//Interfaces

interface UserInterface{
    readonly id:number,
    name:string,
    age?:number
}

const user1:UserInterface={
    id:1,
    name:"John",
}

interface MathFunc{
    (x:number,y:number):number;
}

const add:MathFunc=function(a:number,b:number){
    return a+b;
}
const sub:MathFunc=(a:number,b:number)=>a-b;


type Point=number | string;
const p1:Point=1;

//Classes

interface PersonInterface{
    id:number,
    name:string,
    register():string
}

class Person implements PersonInterface{
    // private id:number
    // protected name:string
    id:number
    name:string

    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
    register(){
        return `${this.name} is now registered`;
    }
}

const ahmad=new Person(1,"Ahmad Alqaisi");
console.log(ahmad.register());

class Employee extends Person{
    position:string
    constructor(id:number,name:string,position:string){
        super(id,name);
        this.position=position;
    }
}
const emp=new Employee(3,"Ahmad","Developer");
console.log(emp.name);
console.log(emp.register());


//Generics

function getArray(items:any[]):any[]{
    return new Array().concat(items);
}

let numArray=getArray([1,2,3]);
let strArray=getArray(["Ahmad","Hame","Alqaisi"]);
