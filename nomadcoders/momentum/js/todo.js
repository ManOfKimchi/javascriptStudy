import TodoItem from "./TodoItem.js";

export default function Todo({ $app, initialState, onTodoSubmit, deleteTodo }) {
    this.state = initialState;

    this.$todoForm = document.createElement("form");
    this.$todoForm.className = "todoform";
    this.$todoForm.id = "todo-form";
    this.$todoList = document.createElement("ul");
    this.$todoList.id = "todo-list";
    this.$todoList.className = "todolist";
    $app.appendChild(this.$todoForm);
    $app.appendChild(this.$todoList);

    this.$todoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const todoForm = e.target.closest(".todoform");
        if (todoForm) {
            const input = todoForm.querySelector("input");
            onTodoSubmit(input.value);
        }
    });

    this.setState = ({ name, todoList }) => {
        this.state = {
            ...this.state,
            name,
            todoList,
        };
        this.render();
    };

    this.render = () => {
        this.$todoList.textContent = "";
        this.$todoForm.textContent = "";
        if (!this.state.name) return;
        this.$todoForm.innerHTML = `<input class="forminput" type="text" placeholder="Write a To Do and Press Enter." required/>`;

        this.state.todoList.forEach((todo) => {
            new TodoItem({
                $list: this.$todoList,
                initialState: {
                    todo,
                },
                deleteTodo,
            });
        });
        this.$todoForm.querySelector("input").focus();
    };

    this.render();
}
