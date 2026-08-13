//HOF
const sayHello = (name, number = 10) => console.log(`hello ${name} ${number}`);
//cb stand for callback
const greet = (cb, name, number) => {
  //at some point in time the callback function will be called
  //cb also refer to the sayHello function
  cb(name, number);
};
greet(sayHello, 'John', 22); //higher order function
sayHello('sdfs', 3); //normal function call
const arr = [12, 22, 53, 34, 22];

for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}
//ForEach
// loop through the array and doesn't return anything

const myFunction = (item, index) => {
  console.log(item, index);
};
arr.forEach(myFunction);

//map
//return a new array with the updated values
const newArr = [];
for (let index = 0; index < arr.length; index++) {
  if (arr[index] % 2 == 0) {
    newArr.push(arr[index] * 2);
  } else {
    newArr.push(arr[index]);
  }
}
console.log(newArr);
const squaredValues = arr.map((item) => {
  return item * 2;
});
console.log(squaredValues);

//filter
// return a new array with the condition applied on the items
const evenValues = [];
for (let index = 0; index < arr.length; index++) {
  if (arr[index] % 2 == 0) {
    evenValues.push(arr[index] * 2);
  }
}
console.log(evenValues);
const evenValues2 = arr.filter((item) => {
  return item % 2 === 0;
});
console.log(evenValues2);

//find

const foundItem = arr.find((item) => item % 2 === 0);
console.log(foundItem);
const foundItem2 = arr.find((item) => item === 123423);
console.log(foundItem2);
//includes
//return true/false if the item is in the array

const has22 = arr.includes(22323);
console.log(has22);
//every or some
const students = [
  { name: 'john doe', grade: 40 },
  { name: 'jane doe', grade: 60 },
  { name: 'joe doe', grade: 80 },
  { name: 'bob doe', grade: 90 },
  { name: 'jack doe', grade: 100 },
];
const allPassedStudents = students.some((student) => student.grade > 50);
console.log(allPassedStudents);
const allPassedStudents2 = students.every((student) => student.grade > 50);
console.log(allPassedStudents2);
const passedStudents = students.filter((student) => student.grade > 60);
console.log(passedStudents);
//Reduce

let sum = 0;
for (let index = 0; index < arr.length; index++) {
  sum += arr[index];
}
console.log(sum);
// const arr = [12, 22, 53, 34, 22];
const sum2 = arr.reduce((previousValue, item, index) => {
  console.log(previousValue, item, index);
  //previousValue = previousValue + item
  previousValue += item;
  return previousValue;
}, 0);
console.log(sum2);

const products = [
  { name: 'Laptop', price: 1200, qty: 3 },
  { name: 'Mouse', price: 25, qty: 10 },
  { name: 'Keyboard', price: 75, qty: 6 },
  { name: 'Monitor', price: 300, qty: 4 },
  { name: 'Headphones', price: 150, qty: 8 },
];

const cartTotal = products.reduce((acc, { price, qty }) => {
  console.log(acc, price, qty);
  // acc = acc + price * qty;
  acc += price * qty;
  return acc;
}, 0);
console.log(cartTotal);

const people = [
  { name: 'Alice', something: 'sdf', age: 15 },
  { name: 'Bob', age: 30 },
  { name: 'Carol', age: 35 },
];

// Increase age by 1 and add a new field 'canVote'
console.info('New array with additional properties');
//spread operator ...person its used to make a copy of the previous object or array then we can overright the values after using it
const updatedPeople = people.map((person) => ({
  ...person,
  age: person.age + 1,
  canVote: person.age >= 18,
}));
console.log('The original people array remains the same:', people);
console.log('Updated People:', updatedPeople);

const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];

console.info('Counting occurrences of each fruit:');
const counts = items.reduce((acc, fruit) => {
  // acc[fruit] = (acc[fruit] || 0) + 1;// the first time acc[fruit] will be undefined so it will be 0 + 1 the time after it will be 1 + 1
  // acc[fruit] can either be undefined for the first time or 1,2,3,..
  if (acc[fruit]) {
    acc[fruit] += 1;
  } else {
    acc[fruit] = 1;
  }
  // console.log(acc);
  return acc;
}, {});
console.log('Counts:', counts); // {apple:2,banana:2...}
