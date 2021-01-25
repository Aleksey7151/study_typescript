function is(arg1: unknown, ...args: unknown[]) : boolean {
    if (args.length != 1) {
        return false;
    }

    let arg2 = args[0];

    return arg1 === arg2;
}

class TSet {
    private values: number[] = [];

    add(value: number) : this {
        this.values.push(value);

        return this;
    }
}

class MutableSet extends TSet {
    delete(value: number) : boolean {
        return true;
    }
}

console.log(is('hello', 'goodbuy'));
console.log(is(true, true));
console.log(is(true, false));
console.log(is(42, 42));
console.log(is('foo', 10));
console.log(is([1], [1, 3], [1,2,3]));

let set = new TSet();
set.add(4).add(6).add(8);

let mset = new MutableSet();
mset.add(4).add(6).add(9);