export default function Greeting({ $app, initialState, onLogin, onLogout }) {
    this.state = initialState;
    this.onLogin = onLogin;
    this.onLogout = onLogout;

    this.$target = document.createElement("div");
    this.$target.className = "usercontent";
    this.$inputForm = document.createElement("form");
    this.$inputForm.id = "login-form";
    this.$inputForm.className = "login-form";
    this.$greeting = document.createElement("h1");
    this.$greeting.id = "greeting";
    this.$greeting.className = "greeting";
    this.$logout = document.createElement("button");
    this.$logout.innerText = "Sign out";
    this.$logout.className = "logoutbtn";
    this.$target.appendChild(this.$inputForm);
    this.$target.appendChild(this.$greeting);
    this.$target.appendChild(this.$logout);
    $app.appendChild(this.$target);

    this.setState = ({ name }) => {
        this.state = {
            ...this.state,
            name,
        };
        this.render();
    };

    this.$target.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = e.target.closest("#login-form").querySelector("input");
        if (input && input.value) {
            this.onLogin(input.value);
        }
    });
    this.$target.addEventListener("click", (e) => {
        const button = e.target.closest(".logoutbtn");
        if (button) {
            this.onLogout();
        }
    });

    this.render = () => {
        this.$inputForm.innerHTML = `
        <input class="forminput" required maxlength="15" type="text" placeholder="What is your name?"/>
        <input class="loginbtn" type="submit" value="Sign In"/>`;
        this.$greeting.innerText = `Hello ${this.state.name}!`;
        if (this.state.name) {
            this.$inputForm.classList.add("hidden");
            this.$greeting.classList.remove("hidden");
            this.$logout.classList.remove("hidden");
        } else {
            this.$inputForm.classList.remove("hidden");
            this.$greeting.classList.add("hidden");
            this.$logout.classList.add("hidden");
        }
        this.$inputForm.querySelector("input").focus();
    };
    this.render();
}
