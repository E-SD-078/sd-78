//async
const url = 'https://rickandmortyapi.com/api/character';

fetch(url).then(handleResponse).then(handleData).catch(handleError);
console.log('THIS IS AFTER FETCH');

function handleResponse(response) {
  console.log('WHAT is response', response);
  return response.json();
}
function handleData(data) {
  console.log('the json response data:', data);
}
function handleError(error) {
  console.error('OH NOOO', error.message);
}
const pizzaPromise = () =>
  new Promise((resolve, reject) => {
    // Let's have a random value determining if you get your beer
    const isThereBeerAvailable = Math.random() > 0.5 ? true : false;
    if (isThereBeerAvailable) {
      resolve('Here is an hypothetical slice of pizza');
    } else {
      reject('Sorry, no pizza for you');
    }
  });

// Now you can call pizzaPromise multiple times!

pizzaPromise()
  .then((value) => console.log(value))
  .catch(console.error);

const options = {
  // We need to explicitly indicate the method
  method: 'POST',
  // We need to inform our API, in this case, JSON Placeholder, we are sending data as JSON
  headers: {
    'Content-Type': 'application/json',
  },
  // And we send our stringified body!
  body: JSON.stringify({
    userId: 1, //
    title: 'sdfsdfdsf',
    completed: false,
  }),
};
fetch('https://jsonplaceholder.typicode.com/posts', options)
  .then((res) => {
    // this .then method, receives a function as an argument, this function when called
    // has access to the response object!
    // You can check if the response status is OK
    if (!res.ok) throw new Error('Something went wrong');
    // Or access the JSON data in the response
    return res.json(); // Response.json() returns, incidentally, a promise
  })
  .then((data) => {
    console.log(data);
  });
