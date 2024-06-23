let isDone: boolean = false;

let decimal: number = 6;
let hex: number = 0x00f00d;
let binary: number = 0b10100;
let octal: number = 0o744;

let color: string = 'red';

enum Color {Red, Green, Blue}

let c: Color = Color.Green; 

let notSure: any = 4;
notSure = "hello"
notSure = true

//BigInt
let big: bigint = 9007199332746327846738264n;

let u: undefined = undefined;
let n: null = null;

let student: {
    name: string,
    age: number
} = {
    name: 'Igor',
    age: 24
}

let notSure2: unknown = 4;
notSure2 = "hello"
notSure2 = false

let job: string = 'Code'

let a: number|string = 4;
a = "hello";

let list: number[] = [1,2,3]

let list2: Array<number> = [1,2,3]

let names: string[] = ['hdhf', 'dsjfdk','jsdfkd']

let tuple: [string, number, boolean]

tuple = ['Alex', 33, false]


let obj: {name: string, age: number, job: boolean}

obj = {
    name: "ALex",
    age: 33,
    job: true
}



let owner1: {
    name: string,
    age: number
} = {
    name: 'Alex',
    age:25
}

let owner2: {
    name: string,
    age: number
} = {
    name: 'Oleg',
    age: 33
}

let owners: object[] = [owner1, owner2]

let car: {model: string, year: number,  owners?: object[]} = {
    model: 'Tesla',
    year: 2020
}

car["owners"] = owners