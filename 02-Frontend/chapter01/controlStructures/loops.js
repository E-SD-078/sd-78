// for
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
for (let i = 0; i < 10; i++) {
  console.log(i);
}
//while

let index = 0;
while (index < 10) {
  console.log(index);
  index++; // important to update the index otherwise we get infint loop
}
//do while
let age = 100;
do {
  console.log(age);
  age++;
} while (age < 50);
//print only even numbers
for (let i = 0; i < 10; i++) {
  console.log('what is the main value of i', i);
  if (i % 2 == 0) {
    continue; //skip the even numbers iterations
  }
  console.log(i);
}
// if the number is odd break the loop
for (let i = 0; i < 10; i++) {
  console.log('what is the main value of i', i);
  if (i % 2 == 1) {
    break; // stop the loop and break it and go outside
  }
  console.log(i);
}
console.log('outside');
