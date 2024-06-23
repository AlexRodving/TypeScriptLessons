"use strict";
let isDone = false;
let decimal = 6;
let hex = 0x00f00d;
let binary = 0b10100;
let octal = 0o744;
let color = 'red';
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
let notSure = 4;
notSure = "hello";
notSure = true;
//BigInt
let big = 9007199332746327846738264n;
let u = undefined;
let n = null;
let student = {
    name: 'Igor',
    age: 24
};
let notSure2 = 4;
notSure2 = "hello";
notSure2 = false;
let job = 'Code';
let a = 4;
a = "hello";
let list = [1, 2, 3];
let list2 = [1, 2, 3];
let names = ['hdhf', 'dsjfdk', 'jsdfkd'];
let tuple;
tuple = ['Alex', 33, false];
let obj;
obj = {
    name: "ALex",
    age: 33,
    job: true
};
let owner1 = {
    name: 'Alex',
    age: 25
};
let owner2 = {
    name: 'Oleg',
    age: 33
};
let owners = [owner1, owner2];
let car = {
    model: 'Tesla',
    year: 2020
};
car["owners"] = owners;
