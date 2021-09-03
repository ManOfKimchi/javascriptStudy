import Greeting from "./greetings.js";
import {
    login,
    getItem,
    setItem,
    getTodolist,
    logout,
    getQuotes,
    getWeather,
    getFakeWeather,
} from "./api.js";
import Clock from "./clock.js";
import Quotes from "./quotes.js";
import Background from "./Background.js";
import Todo from "./Todo.js";
import Weather from "./weather.js";
import Loading from "./Loading.js";

let todoList = [];

export default function App($app) {
    this.$app = $app;
    this.state = {
        name: "",
        format: "HH:mm:ss",
        quotes: [],
        todoList: [],
        todoInput: "",
    };

    this.init = async () => {
        const { name, weather, main } = await getWeather();
        const user = await getItem("id");
        todoList = await getTodolist(user);

        this.setState({
            name: user,
            quotes: await getQuotes(),
            city: name,
            todoList: todoList,
            info: weather[0].main,
            degree: main.temp,
            loading: false,
        });
        this.$app.querySelector(".loading").classList.add("hidden");
    };

    this.init();

    const clock = new Clock({
        $app: this.$app,
        initialState: {
            format: "HH:mm:ss",
            day: ["일", "월", "화", "수", "목", "금", "토"],
        },
        onFormat: (format) => {
            this.setState({
                format,
            });
        },
    });
    const weather = new Weather({
        $app: this.$app,
        initialState: {},
    });
    const greeting = new Greeting({
        $app: this.$app,
        initialState: {},
        onLogin: async (value) => {
            login(value);
            todoList = await getTodolist(value);
            this.setState({
                name: value,
                todoList,
            });
        },
        onLogout: async () => {
            logout();
            todoList = [];
            this.setState({
                name: await getItem("id"),
            });
        },
    });
    const quotes = new Quotes({
        $app: document.body,
        initialState: {
            quotes: [],
        },
    });
    const background = new Background({
        $app: this.$app,
        initialState: {},
    });
    const todo = new Todo({
        $app: this.$app,
        initialState: {
            todoList: [],
        },
        onTodoSubmit: async (value) => {
            const newTodo = {
                id: String(Date.now()),
                text: value,
            };
            todoList.push(newTodo);
            setItem(this.state.name, JSON.stringify(todoList));
            this.setState({
                todoInput: "",
                todoList: todoList,
            });
        },
        deleteTodo: (id) => {
            todoList = todoList.filter((todo) => todo.id !== id);
            setItem(this.state.name, JSON.stringify(todoList));
            this.setState({
                todoList: todoList,
            });
        },
    });
    const loading = new Loading({
        $app: this.$app,
        initialState: {
            loading: true,
        },
    });

    this.setState = (nextState) => {
        this.state = {
            ...this.state,
            ...nextState,
        };
        greeting.setState(this.state);
        clock.setState(this.state);
        quotes.setState(this.state);
        todo.setState(this.state);
        weather.setState(this.state);
        loading.setState(this.state);
    };
}
