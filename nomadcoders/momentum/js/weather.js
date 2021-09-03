export default function Weather({ $app, initialState }) {
    this.state = initialState;

    this.$weather = document.createElement("div");
    this.$weather.className = "weather";
    $app.appendChild(this.$weather);

    this.render = () => {
        if (!this.state.name) {
            this.$weather.textContent = "";
            return;
        }
        this.$weather.innerHTML = `
        <span>${this.state.city}</span>
        <span>${this.state.info} ${this.state.degree}℃</span>
        `;
    };
    this.setState = ({ city, info, degree, name }) => {
        this.state = {
            ...this.state,
            city,
            info,
            degree,
            name,
        };
        this.render();
    };
    // this.render();
}
