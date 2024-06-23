"use strict";
let strValue = "hdshkkjf sddkljflsdf";
// let strLengt: number = (<string>strValue).length
let strLengt = strValue.length;
console.log(strLengt);
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let num of numbers) {
    sum += num;
}
console.log(sum);
if (sum > 10) {
    console.log('> 10');
}
else {
    console.log('<= 10');
}
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
let roots = [];
for (let num of numbers) {
    roots.push(Math.sqrt(num));
}
console.log(roots);
let i = 5;
do {
    console.log(i);
    i--;
} while (i > 0);
