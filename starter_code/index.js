const Elevator = require('./elevator.js');
const Person = require('./person.js');
console.log("HOLI");

let elevator = new Elevator;
let person1 = new Person("victor", 1, 10);
let person2 = new Person("Yaiza", 5, 2);
let person3 = new Person("Pedro", 7, 1);
let person4 = new Person("Manu", 8, 9);
let person5 = new Person("Ana", 4, 5);
let person6 = new Person("Esther", 4, 10);

elevator.call(person1);
elevator.call(person1);
elevator.update();
