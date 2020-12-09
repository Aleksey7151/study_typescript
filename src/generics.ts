class Lengthwise {
    length: number;
}

function identity<T extends Lengthwise>(args: T) : T {
    console.log(args.length);
    return args;
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

console.log('The End!!!');