console.log('first message');
// when we want to run code one time after specific time
const timeoutId = setTimeout(() => {
  console.log('Hello World');
}, 1000); //time in mil seconds
// clearTimeout(timeoutId); //stop the timeOut from running
console.log('last message', timeoutId);

//when we want to run code many times based on time interval
let count = 0;
const intervalId = setInterval(() => {
  count++;
  if (count > 5) {
    clearInterval(intervalId);
  }
  console.log('hello World');
}, 1000);
console.log('sdfdsf', intervalId);
function greet() {
  console.log('Hello, World!');
}

const intervalID = setInterval(greet, 1000); // Executes the greet function every 1 second

setTimeout(
  () =>
    // To cancel the interval
    clearInterval(intervalID),
  10000,
); // a timeout to remove the interval after 10 seconds!
function updateClock() {
  let now = new Date();
  console.log(now.toLocaleTimeString());
}

setInterval(updateClock, 1000); // Updates the clock every second
