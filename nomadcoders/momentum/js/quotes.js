const quotes = [
  {
    quote: "111",
    author: "222",
  },
  {
    quote: "3",
    author: "4",
  },
  {
    quote: "5",
    author: "6",
  },
];

const quoteEl = document.querySelector("#quote span:first-child");
const authorEl = document.querySelector("#quote span:last-child");
function showQuote() {
  const random = Math.round(Math.random() * 10) % 3;
  quoteEl.innerText = quotes[random].quote;
  authorEl.innerText = quotes[random].author;
}
showQuote();
