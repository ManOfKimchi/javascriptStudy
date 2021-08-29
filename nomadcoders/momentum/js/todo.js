const todoFormEl = document.querySelector("#todo-form");
const inputEl = todoFormEl.querySelector("input");
const todoListEl = document.querySelector("#todo-list");
const TODOLIST_KEY = "todoList";
let todoList = get();

function Todo(text) {
  this.id = Date.now();
  this.text = text;
  this.date = new Date();
}
function add(value) {
  const newTodo = new Todo(value);
  todoList.push(newTodo);
  localStorage.setItem(TODOLIST_KEY, JSON.stringify(todoList));
  return newTodo;
}
function remove(value) {
  todoList = todoList.filter((v) => v.id !== parseInt(value));
  localStorage.setItem(TODOLIST_KEY, JSON.stringify(todoList));
}
function get() {
  const prevList = localStorage.getItem(TODOLIST_KEY);
  return prevList ? JSON.parse(prevList) : [];
}

function drawTodo(todo) {
  const list = document.createElement("li");
  list.id = todo.id;

  const span = document.createElement("span");
  span.innerText = todo.text;
  span.id = todo.id;

  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", (e) => {
    const list = e.target.parentNode;
    const span = e.target.parentNode.firstChild;
    remove(span.id);
    list.remove();
  });

  list.appendChild(span);
  list.appendChild(btn);
  todoListEl.appendChild(list);
}

todoFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodo = add(inputEl.value);
  inputEl.value = "";
  drawTodo(newTodo);
});

todoList.forEach((todo) => {
  drawTodo(todo);
});
