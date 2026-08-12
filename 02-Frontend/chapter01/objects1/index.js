const student = {
  firstName: 'John',
  lastName: 'Doe',
  isActive: true,
  age: 20,
  email: 'john@gmail.com',
  sayHi() {
    console.log(`hello my name is ${this.firstName} ${this.lastName}`);
  },
};
console.log('what is this', this);
console.log(student.firstName);

console.log(student.lastName);
console.log(student.age);

console.log(student.email);
student.sayHi();
console.log(student['age']);
const myAge = 'age';
console.log(student.myAge); //undefined
console.log(student[myAge]); //20
student.age = 70;
console.log(student.age);
delete student.isActive;
student['course'] = 'UI/UX';
student.batch = 'sd-78';
console.warn(student);
const myDate = new Date();
console.log(myDate.getDay());
console.log(myDate.getMonth());
const arr = [1, 2, 3];
//arrays type is Object so in order to check if the var is array we need to use Array.isArray()
console.log(typeof student, typeof arr, Array.isArray(arr), Array.isArray(student));
let now = new Date();
console.log(now.toDateString()); // current date
console.log(now.getFullYear()); // returns the year
console.log(Date.now());
//truthy values
/*
true
any number > 0
any strings that are not ''
*/
//falsy values
/**
 false
 0
 ''
 null
 undefined
 NaN
 */

let cart = [];
cart.push({ name: 'iphone16', price: 1000, qty: 2 });
cart.push({ name: 'mac pro', price: 4999, qty: 1 });

if (cart.length > 0) {
  console.log('here are the items in the cart');
  cart.forEach((product) => {
    console.log(product);
  });
} else {
  console.log('the cart is empty please add more products');
}
// the left side is array destructuring
// the right side is the array
// x,y,z are named vars that represents the first the second and third index of the array
// if we only have 1 element in the array any other vars will be undefined unless given a default value
const [x = 10, y = 20, z = 30, a] = [1, 333, 15, 2, 3, 23];
console.log(x); // Output: 1
console.log(y); // Output: 333
console.log(z); // Output: 15
console.log(a); // 2
const person = {
  name: 'Alice',
  age: 25,
  city: 'New York',
  address: {
    street: '123 Main St',
    zipcode: '10001',
  },
};
console.log(person.name);
//the left side is oject destructuring and the right side is the object
const { name } = person;
// we can give special names for keys in case we want to access it
const { name: banana } = person;
console.log(banana);
// const {
//   address: { street, zipcode },
// } = person;
const { address } = person;
const { street, zipcode } = address;
console.log(person.address.street, street);

// const [n1, [n2, n3], n4] = [1, [2, 3], 4];
const [n1, n2, n4] = [1, [2, 3], 4];
const [a, b] = n2;
console.log(a, b);
