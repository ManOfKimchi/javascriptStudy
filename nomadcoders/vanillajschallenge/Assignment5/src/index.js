const helloEl = document.createElement("h2");
helloEl.innerText = "Hello!";
const palette = ["#ff0000", "#00ff00", "#0000ff"];

function drawBySize(width) {
  let colorIdx = 0;
  if (width > 200 && width <= 400) {
    colorIdx = 1;
  } else if (width > 400) {
    colorIdx = 2;
  }
  document.body.style.backgroundColor = palette[colorIdx];
}

window.addEventListener("resize", (e) => {
  const { innerWidth } = e.target;
  drawBySize(innerWidth);
});

drawBySize(window.innerWidth);
document.body.appendChild(helloEl);
