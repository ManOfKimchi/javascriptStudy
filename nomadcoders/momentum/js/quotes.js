export default function Quotes({ $app, initialState }) {
    this.state = initialState;

    this.$quotes = document.createElement("footer");
    this.$quotes.className = "quotes";
    this.$quote = document.createElement("span");
    this.$author = document.createElement("span");
    this.$quotes.appendChild(this.$quote);
    this.$quotes.appendChild(this.$author);
    $app.appendChild(this.$quotes);

    this.setState = ({ quotes }) => {
        this.state = {
            ...this.state,
            quotes,
        };
        this.render();
    };
    this.render = () => {
        if (!this.state.quotes.length) return;
        if (this.state.quote) return;
        const random = Math.floor(Math.random() * this.state.quotes.length);
        const { quote, author } = this.state.quotes[random];
        this.state.quote = { quote, author };
        this.$quote.innerText = quote;
        this.$author.innerText = author;
    };
    this.render();
}
