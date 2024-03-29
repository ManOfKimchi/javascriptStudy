export default function Background({ $app, initialState }) {
    this.state = initialState;

    this.$bg = document.createElement("div");
    this.$bg.className = "background";
    $app.appendChild(this.$bg);

    this.render = () => {
        this.$bg.innerHTML = `<img src="https://picsum.photos/1600/900" />`;
    };
    this.render();
}
