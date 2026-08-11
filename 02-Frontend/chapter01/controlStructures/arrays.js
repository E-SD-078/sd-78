const arr = ['a', 'b', 'c'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr.length);

for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log(`item ${arr[index]} is at index ${index}`);
}
arr.push('d'); // adds to the end of the array
console.log(arr);
console.log(arr.pop()); //removes from the end of the array
console.log(arr);

arr.unshift('z'); //adds to the start of the array
console.log('dsdf', arr.slice(1, 3));
console.log(arr);
console.log(arr.shift()); //remove from the start
console.log(arr);
console.log(arr.indexOf('a'));
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.toSliced(-2));
// Expected output: Array ["duck", "elephant"]
console.log('Sdfsdf', animals);
console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
const months = ['Jan', 'Mar', 'Apr', 'May'];

// Inserting an element at index 1
const months2 = months.toSpliced(1, 0, 'Feb');
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// Deleting two elements starting from index 2
const months3 = months2.toSpliced(2, 2);
console.log(months3); // ["Jan", "Feb", "May"]

// Replacing one element at index 1 with two new elements
const months4 = months3.toSpliced(1, 1, 'Feb', 'Mar');
console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// Original array is not modified
console.log(months); // ["Jan", "Mar", "Apr", "May"]
// Initialize the array
const fruits = ['apple', 'banana', 'cherry', 'date'];

// Using a for loop to iterate over the array
console.info('Using a for loop:');
for (let i = 0; i < fruits.length; i++) {
  console.log(`Element at index ${i} is ${fruits[i]}`);
}

// Using a for...of loop to iterate over the array
console.info('Using a for...of loop:');
for (const fruit of fruits) {
  console.log(`Current fruit: ${fruit}`);
}
