type Returns = string | null;

// named function
function trueOrNull(isTrue: boolean) : Returns {
    if (isTrue)
    {
        return 'true';
    }
    
    return null;
}

let z = 100;

// anonimous function
let myAdd = function(x: number, y: number) : number {
    return x + y + z;
}

let increment: (baseValue: number, incrementation: number) => number = function(x: number, y: number) {
    return x + y;
}

function functionWithOptionalParameter(firstName: string, lastName?: string) : string {
    if (lastName) {
        return firstName + " " + lastName;
    }

    return firstName;
}

function functionWithDefaultParameter(firstName: string, lastName = "Bob") {
    return firstName + " " + lastName;
}

function functionWithRestParameters(firstName: string, age: number, ...restOfName: string[]) {
    return firstName + "Age = " + age.toString() + " " + restOfName.join(" ");
}

let sum = myAdd(5, 2);
console.log(sum);

z = 50;

let sum1 = myAdd(5, 2);
console.log(sum1);

let incr = increment(5, 7);
console.log(incr);

console.log(functionWithOptionalParameter("Alex", "Safonau"));

console.log(functionWithDefaultParameter("Alex"));

console.log(functionWithRestParameters("GoGi", 55, "Safonau", "Batskavich", "Frodo", "Baggins"));

type Great = (name: string) => string;
type Log = (message: string, userId?: string) => void;
type sumVariadicSafe = (...numbers: number[]) => number;

let log: Log = (message, userId = "Not signed in") => {
    let time = new Date().toISOString();
    console.log(time, message, userId);
}

log("Frodo");

{
    let great: Great = (name: string) => {
        return `Greating you ${name}!!`;
    }

    console.log(great("Gandalf"));
}

console.log("The End!!");
