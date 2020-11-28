class Greating{
    greating: string;

    constructor(message: string) {
        this.greating = message;
    }

    great() {
        console.log(this.greating);
    }
}

let great = new Greating("hello world!!");
great.great();

class Animal {
    name: string;

    constructor (name: string) {
        this.name = name;
    }

    move(distance: number = 0) {
        console.log("Animal moved " + distance + " meters");
    }
}

class Dog extends Animal {
    constructor (name: string) {
        super(name);
    }

    bark() {
        console.log("The dog barks!!!");
    }
}

const dog = new Dog("Spyke");
dog.bark();
dog.move(17);
dog.bark();

class Snake extends Animal {
    constructor (name: string) {
        super(name);
    }

    move(distance: number = 5) {
        console.log("Slithering...")
        super.move(distance);
    }
}

// By default all class members are pubic
class Horse extends Animal {
    private secondName: string;

    public constructor(name: string) {
        super(name);
        this.secondName = name + name;
    }

    public move(distance: number = 50) {
        console.log("Galoping..." + this.secondName);
        super.move(distance);
    }
}

let snake = new Snake("Lord Voldemort");
let horse: Animal = new Horse("Jimmy the King of horses");

snake.move();
horse.move(33);

class Person {
    protected readonly name: string;
    protected constructor(name: string) {
        this.name = name;
    }
}

const maxNameLength: number = 10;

class Employee extends Person {
    private readonly department: string;

    private _fullName: string = "";

    constructor (name: string, department: string) {
        super(name);
        this.department = department;
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(value: string) {
        if (value && value.length > maxNameLength) {
            throw new Error("fullName has a max length of " + maxNameLength);
        }

        if (value) {
            console.log("bla bla");
        }

        if (!value) {
            console.log("bla bla");
        }

        this._fullName = value;
    }

    display() {
        console.log(`Employee: ${this.name}, Department: ${this.department}`);
    }
}

//let pers = new Person(""); can not create since constructor is protected

let emp = new Employee("Fred", "Economy");
emp.display();
emp.fullName = 'ter';
emp.fullName = "Some quite long full name";


// Parameter properties
class Octopus {
    age: number;

    constructor(readonly name: string) {}
}

let oct = new Octopus("some string");
let n = oct.name;

console.log("THe end!");