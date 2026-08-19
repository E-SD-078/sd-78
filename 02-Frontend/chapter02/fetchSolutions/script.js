const todoListElement = document.getElementById('todo-list');
const errorPElement = document.querySelector('.error-message');
async function fetchTodos() {
  try {
    //fetch always send request to the server
    // GET to read data
    // POST to create an item
    // PUT to update an item (you need to provide id )
    // DELETE to delete the item (you need to provide id)
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/'); //GET to jsonplaceholder /todos

    if (!response.ok) throw new Error('Something went wrong');

    const data = await response.json(); //json data
    console.log(data);
    displayTodos(data);
  } catch (error) {
    errorPElement.classList.add('text-red-500', 'font-bold', 'text-center');
    errorPElement.textContent = error.message;
  }
}

function displayTodos(todos) {
  //clear existing todos
  todoListElement.innerHTML = '';
  //create li for each todo so we need to loop
  todos.forEach((todo) => {
    const todoItem = document.createElement('li');
    todoItem.textContent = todo.title;
    todoItem.classList.add('mb-2');
    if (todo.completed) {
      todoItem.classList.add('line-through', 'text-gray-600');
    } else {
      todoItem.classList.add('font-bold');
    }
    todoListElement.appendChild(todoItem);
  });
}
fetchTodos();
