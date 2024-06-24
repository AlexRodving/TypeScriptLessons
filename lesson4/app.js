"use strict";
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet('Alex'));
function greet2(name, isMorning, message = 'Good Day') {
    if (isMorning) {
        return `Good Morning, ${name}`;
    }
    return `${message}, ${name}`;
}
console.log(greet2('Alex', true));
console.log(greet2('Igor'));
function greetMany(message, ...names) {
    return `${message} ${names.join(', ')}`;
}
console.log(greetMany('Hello', 'Alex', 'Igor', 'Oleg'));
function add(a, b) {
    if (typeof a === 'string' && typeof b === 'string')
        return a.concat('', b);
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
}
console.log(add('Hello', 'World'));
console.log(add(10, 5));
let add2 = function (a, b) {
    console.log(a + b);
};
add2(10, 20);
let multiply = (a, b) => a * b;
console.log(multiply(2, 2));
function createAdder(a) {
    return function (b) {
        return a + b;
    };
}
let addFive = createAdder(5);
console.log(addFive(10));
let addTEn = createAdder(10);
console.log(addTEn(20));
