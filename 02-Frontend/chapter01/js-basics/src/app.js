console.log('Hello World');
//basics

//variables
// var vs const vs let

// very bad don't do this
x = 6;
console.log(x);

// bad don't use
console.log('WHAT IS THIS', y);
// any variable that is defined with var will default to the value of undefined!
// this will create a definition at the top of the file with y=undefined
var y = 'hello';
console.log('hello', y);
// use only let and const

// if we have a value that will never change use const otherwise use let
// console.log(age);
const age = 22;
console.log(age);
// age = 23; this will error out

// console.log(count); ReferenceError: Cannot access 'count' before initialization
let count = 0;
count = count + 1;
console.log(count);
count += 1;
console.log(count);
count++;
console.log(count);
let firstName = 'John';

try {
  console.log('this is before the error ');
  // throw new Error('this is error'); //this is api call that might fail
  console.log('What is after the error ');
} catch (error) {
  console.log('oh noooo', error);
}
const message = `this is the value of the count ${count} and I like it`;
console.log(message);
let num = 2.5;
console.log(num);
let isOn = false;
isOn = true;
//toggle the boolean flag
isOn = !isOn; // isOn = true => !true = false !isOn = false
console.log(isOn);

let courses; // defaults to undefined =0 ='' =false = [] = {}
console.log(courses);
let sym = Symbol('a unique identifier');
console.log(sym);

const student = { name: 'john', age: 33, email: 'j@j.com', id: 1 };
const arr = ['a', 'b', 'c'];
console.log(arr[0]);
console.log(student.name);
let remainder = 23 % 2;
console.log(remainder);
let a = 10;
a++; // Now a is 11 (postfix)
let b = 10;
++b; // Now b is 11 (prefix)
console.log(a, b);
sayHello('something');
// function defination function declaration
function sayHello(name = 'student') {
  console.log(`Hello ${name}`);
}
// function call or invoke
sayHello('john');
sayHello('jack');
sayHello('jane');
sayHello('bob');
sayHello('mike');
sayHello();
console;
const nums = function (a, b) {
  //function body
  //2 a= 1,b=2
  //3
  let mySum = a + b;
  console.log(mySum);
};
//outside the function
nums(1, 2); //1
// we can't access block var from outside the scop
// console.log(mySum);
const sum = (a, b) => {
  return a + b;
};
const result = sum(1, 5);
console.log(result);
const time = 12; //assign a value with the =
//compare 2 values use ===
const stringTwo = '2';
const numTwo = 2;
console.log(stringTwo === numTwo); //compare the data type and the value
console.log(typeof stringTwo, typeof numTwo);
console.log(stringTwo == numTwo); // compare the values only
// we should always use === and !== instead of == and != when trying to check the values and data types
console.log(2 !== '2');
console.log(2 != '2');
// 'this will give true which is not correct since its checking on the values only not the data types thats why we use !== instead of !='
console.log(3 <= 3);
