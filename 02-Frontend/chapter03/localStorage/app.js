localStorage.setItem('username', 'johnDoe');
console.log('what is the name', localStorage.getItem('username'));
// rule1: local storage only accept strings!
localStorage.setItem('cart', JSON.stringify([{ name: 'iphone18', price: 1000 }]));
// localStorage.removeItem('cart'); // this to remove an item from local storage
console.log(localStorage.getItem('cart'));
const cart = JSON.parse(localStorage.getItem('cart')) || [];
// let cart1;
// if (JSON.parse(localStorage.getItem('cart'))) {
//   cart1 = JSON.parse(localStorage.getItem('cart'));
// } else {
//   cart1 = [];
// }
console.log(cart);
console.log(crypto.randomUUID());
