// const quotes = [
//   {
//     quote: "고기는 살 안쪄, 찌는 건 너야",
//     author: "돼지",
//   },
//   {
//     quote: "대충 흑백사진에 글 쓰면 명언처럼 보인다.",
//     author: "이말년",
//   },
//   {
//     quote: "스테이크가 먹고 싶다는 것은 아직 스테이크를 먹지 않았다는 뜻이다.",
//     author: "끄덕좌",
//   },
// ];

// const quoteEl = document.querySelector("#quote span:first-child");
// const authorEl = document.querySelector("#quote span:last-child");
// function showQuote() {
//   const random = Math.floor(Math.random() * 3);
//   quoteEl.innerText = quotes[random].quote;
//   authorEl.innerText = `- ${quotes[random].author}`;
// }
// showQuote();

{
    /* <footer>
                <div id="quote" class="quotes">
                    <span></span>
                    <span></span>
                </div>
            </footer> */
}

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
