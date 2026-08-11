//if statements
const number = 1;
if (number > 2) {
  console.log('THE number is good');
}
console.log('Whaat', number);
//if else
if (number > 5) {
  console.log('yesss');
} else {
  console.log('number is too low');
}
console.log('what is num?', number);
// if else if
if (number >= 5 && number <= 10) {
  console.log('1111');
  console.log('yesss');
} else if (number >= 0 && number < 5) {
  console.log('number is too low');
} else {
  console.log('what is this');
}
console.log('what is num again?', number);
//switch
const color = 'red';

switch (color) {
  case 'blue':
    console.log('blue');
    break;
  case 'red':
    console.log('red');
    break;
  case 'orange':
    console.log('orange');
    break;
  default:
    console.log('unknown color');
    break;
}
//ternary
const value = 5 > 10 ? 'this is the true statement' : 'this is the false statement';
console.log(value);
color === 'red' ? console.log('red is nice') : console.log('blue win');
const age = 18;
const isAdult = age >= 18;
console.log(isAdult);
