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

console.log('The End!!!');