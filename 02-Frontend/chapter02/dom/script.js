const body = document.getElementsByTagName('body');
body[0].style.background = '#134';
const h1 = document.getElementById('logo');
// const container = document.getElementsByClassName('container');
//1) get hold of the container that you want to add to
const container = document.querySelector('.container');
console.log(container);
//2) create the element that you want to add
const buttonEl = document.createElement('button');
//3) give it text content or attributes before adding
buttonEl.textContent = 'press me';
// optional add classes or style to the element before adding
buttonEl.classList.add('btn');
//4) append the created element to the container
container.appendChild(buttonEl);
h1.style.color = 'white';

const imgEl = document.createElement('img');
imgEl.src =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMzqPILtsSYtWYPK437ZQKC94Tpzupsc0xEPBd7vSCyA&s=10';
container.appendChild(imgEl);

const aEl = document.createElement('a');
aEl.textContent = 'google.com';
// aEl.href = 'https://www.google.com';
aEl.setAttribute('href', 'https://www.google.com');
aEl.style.color = 'white';
aEl.style.textDecoration = 'none';
container.appendChild(aEl);

//events
//what happen when the button is clicked
const myButton = document.querySelector('.btn');
myButton.addEventListener('click', () => {
  console.log('button clicked');
});

container.addEventListener('mouseover', () => {
  container.style.background = 'red';
});
imgEl.onclick = () => {
  alert('img clicked');
};
