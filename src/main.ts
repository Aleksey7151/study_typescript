type Age = number;

type Person = {
    name: string;
    age: Age;
    salary: number;
}

type Manager = {
    name: string;
    age: number;
    bonus: number;
}

type personAndManager = Person & Manager;

let pam: personAndManager = {
    age: 77,
    name: 'Frodo',
    bonus: 4,
    salary: 54
}

type personOrManager = Person | Manager;
let pom: personOrManager = {
    name: "Gandalf",
    age: 55,
    bonus: 5,
    salary: 89
}

let age: Age = 64;

let person: Person = {
    name: 'Jordg',
    age: age,
    salary: 54
}