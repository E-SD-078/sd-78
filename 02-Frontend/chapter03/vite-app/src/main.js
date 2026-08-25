import './style.css';
import heroImage from './assets/hero.png';
const app = document.querySelector('#app');

const h1 = document.createElement('h1');
h1.textContent = 'Hello World';
app.appendChild(h1);
const img = document.createElement('img');
img.src = heroImage;
app.appendChild(img);
