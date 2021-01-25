
// array
let number_array: number[];
let number_and_string_array: (number | string)[] = [2, 's', 5, 5, 66, 'hhf'];
let empty_array: number[] = [];

let array1 = new Array<number>(23);
let array1_lenght = array1.length;
let array1_keys = array1.keys();

console.log(Array.from(Array(10).keys()));

// tuples
let tuple: [string, number, boolean];
tuple = ["tttt", 676, true];
let str = tuple[0];
let numb = tuple[1];
console.log(numb);
console.log(tuple[2]);

console.log("The end!!!");
