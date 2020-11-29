function Summarise(...values: number[]) : number {
    var args = Array.from(arguments);
    console.log(args);

    return values.reduce((total, value) => total + value, 0);
}

let summary = Summarise(3,5,6,4,2,1,22,0);
console.log(summary);

// GENERATORS
function* createFibonacciGenerator() {
    let current = 0;
    let next = 1;
    while(true) {
        yield current;
        [current, next] = [next, current + next];
    }
}

let generator = createFibonacciGenerator();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

function* createNumbers() : IterableIterator<number> {
    let n = 0;
    while(true) {
        yield n++;
    }
}

let numbs = createNumbers();
console.log(numbs.next());
console.log(numbs.next());
console.log(numbs.next());
console.log(numbs.next());

let numbers = {
    *[Symbol.iterator]() {
        for (let n = 1; n <= 10; n++) {
            yield n;
        }
    }
}

for (let n of numbers) {
    console.log(n);
}

// распространить итератрор
let allNumbers = [...numbers];
let [one, two, ...rest] = numbers;


console.log("THe end!");