export default function TodoItem({ $list, initialState, deleteTodo }) {
    this.state = initialState;

    this.$todo = document.createElement("li");
    $list.appendChild(this.$todo);

    this.$todo.addEventListener("click", (e) => {
        const deleteBtn = e.target.closest("button");
        if (deleteBtn) {
            deleteTodo(deleteBtn.dataset.todoid);
        }
    });

    this.render = () => {
        this.$todo.innerHTML = `
            <span>${this.state.todo.text}</span>
            <button data-todoid="${this.state.todo.id}">𝘅</button>`;
    };
    this.setState = ({ todo }) => {
        this.state = {
            ...this.state,
            todo,
        };
        this.render();
    };
    this.render();
}
