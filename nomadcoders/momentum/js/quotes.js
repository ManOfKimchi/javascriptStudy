const quotes = [
  {
    quote: "고기는 살 안쪄, 찌는 건 너야",
    author: "돼지",
  },
  {
    quote: "대충 흑백사진에 글 쓰면 명언처럼 보인다.",
    author: "이말년",
  },
  {
    quote: "스테이크가 먹고 싶다는 것은 아직 스테이크를 먹지 않았다는 뜻이다.",
    author: "끄덕좌",
  },
];

const quoteEl = document.querySelector("#quote span:first-child");
const authorEl = document.querySelector("#quote span:last-child");
function showQuote() {
  const random = Math.floor(Math.random() * 3);
  quoteEl.innerText = quotes[random].quote;
  authorEl.innerText = `- ${quotes[random].author}`;
}
showQuote();
