"use strict";
let userName = 'Akash';
// userName can't assing number
// userName = 55  
userName = 'Babul';
// console.log(userName)
let rollNumber = 5;
// rollNumber = '5' con't assing as a string value
rollNumber = 1;
// console.log(rollNumber)
let data;
// data = 'all data' can't assing string value must assing object and must have name string and id number,
data = { name: 'akash', id: 555 };
// console.log(data);
let dataArray;
// dataArray = 5 can't assing with out array
dataArray = ['e', 'r'];
// console.log(dataArray);
let arrayOfObject;
arrayOfObject = [{ name: 'akash', id: 40 }];
// console.log(arrayOfObject)
let a;
a = 'akash';
a = 66;
a = { name: 'akash', id: 66 };
a = ['c', 't'];
a = undefined;
a = null;
a = true;
// if type any we can assign any type of value
// now typescript tuple
let data2;
// data2= [55, 'akash', true] need to assign correct order
data2 = [55, true, 'akash'];
// console.log(data2)
// optional proparties
let data3;
data3 = { name: 'akash', id: 55 };
let car2;
car2 = { name: 'Tesla', model: 're3', buy: 2020, new: false };
let car3;
car3 = { name: "Tesla", model: 3030, year: 203 };
let car4;
car4 = { name: 'Tesla', model: 2020 };
// console.log(car4)
// typescript union 
function printStatusCode(code) {
    // console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');
// TypeScript funcation 
function data6() {
    return '';
}
// paramiter and return value must number
function data7(a, b) {
    return a + b;
}
// console.log(data7(5,6))
// optional paramiter 
function data8(a, b, c) {
    return `${c} get ${a + b}`;
}
function data10(a) {
    return a;
}
