const clockTitle = document.querySelector(".js-clock");
const christmas = new Date(`${new Date().getFullYear()}-12-25:00:00:00`);

const timer = setInterval(() => {
  const now = new Date();
  if (now.getMonth() === 11 && now.getDate() === 25) {
    timer.clearInterval();
    clockTitle.innerText = "Merry Christmas!";
  } else {
    let diff = christmas - now;
    diff = diff / 1000;
    const sec = Math.floor(diff % 60);
    diff = diff / 60;
    const min = Math.floor(diff % 60);
    diff = diff / 60;
    const hour = Math.floor(diff % 24);
    diff = diff / 24;
    const day = Math.floor(diff);
    clockTitle.innerText = `${day}d ${hour}h ${min}m ${sec}s`;
  }
}, 1000);
