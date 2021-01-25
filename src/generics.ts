class Lengthwise {
    length: number;
}


type Filter<T> = {
    (array: T[], predicate: (item: T) => boolean) : T[];
}

function identity<T extends Lengthwise>(args: T) : T {
    console.log(args.length);
    return args;
}

function filter<T>(array: T[], predicate: (item: T) => boolean) : T[] {
    let result: T[] = [];
    for (let i = 0; i < array.length; i++)
    {
        let item = array[i];
        if (predicate(item))
        {
            result.push(item);
        }
    }

    return result;
}

function map<T, U>(array: T[], mapper: (item: T) => U) : U[] {
    let result: U[] = [];
    for (let i = 0; i < array.length; i++)
    {
        result[i] = mapper(array[i]);
    }

    return result;
}

identity([1,2,3,4,5]);

class GenericNumber<T> {
    zeroValue: T;
    add: (a: T, b: T) => T;
}

let genericNumber = new GenericNumber<number>();
genericNumber.zeroValue = 0;
genericNumber.add = (a, b) => a + b;
console.log(genericNumber.add(5, 9));

<<<<<<< HEAD
// filter tests
console.log(filter([1,2,3,4,5], i => i < 4));
console.log(filter(['a', 'b', 'c'], i => i != 'b'));

let names = [{firstName: 'beth'}, {firstName: 'caitlyn'}, {firstName: 'xin'}];
console.log(filter(names, n => n.firstName.startsWith('c')));

// map tests
console.log(map<string, boolean>(['a', 'b', 'c'], it => it === 'b'));

// several constraints:

type Sides = {numberOfSides: number};
type SidesWithLenght = {sideLenght: number};

function logPerimeter<Shape extends Sides & SidesWithLenght>(shape: Shape) {
    console.log(`Number of sides: ${shape.numberOfSides}, and side lenght: ${shape.sideLenght}`);
}

let square: Sides & SidesWithLenght = {
    numberOfSides: 7,
    sideLenght: 9,
}

logPerimeter(square);

function call<T extends unknown[], R>(f: (...args: T) => R, ...args: T) : R {
    return f(...args);
}

function fill(length: number, value: string) : string[] {
    return Array.from({length}, () => value);
}

call(fill, 10, 'a');

=======
{
    class BeeKeeper {
        hasMask: boolean;
    }

    class ZooKeeper {
        nameTag: string;
    }

    class Animal {
        numLegs: number;
    }

    class Bee extends Animal {
        keeper: BeeKeeper;
    }

    class Lion extends Animal {
        keeper: ZooKeeper;
    }

    function createInstance<A extends Animal>(c: new () => A) : A {
        return new c();
    }

    function getMonth(date: any) : number | undefined {
        if (date instanceof Date) {
            return date.getMonth();
        }

        return undefined;
    }

    console.log(createInstance(Bee).keeper);
    console.log(createInstance(Lion).keeper);
    console.log(getMonth(5));
    console.log(getMonth(new Date()));
}

>>>>>>> 30ba36ff3f7433f96daac0cd760a387b2bb22772
console.log('The End!!!');