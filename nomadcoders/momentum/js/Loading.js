export default function Loading({ $app, initialState }) {
    this.state = initialState;
    this.$app = $app;
    this.$loading = document.createElement("div");
    this.$loading.className = "loading";
    this.$app.appendChild(this.$loading);
    this.render = () => {
        this.$loading.innerHTML = `<div><img src="./resources/loading.gif" /></div>`;
        this.$loading.style.display = this.state.loading ? "block" : "none";
    };
    this.setState = ({ loading }) => {
        this.state = {
            ...this.state,
            loading,
        };
        this.render();
    };
    this.render();
}
