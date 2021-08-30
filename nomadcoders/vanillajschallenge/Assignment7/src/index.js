const header = document.createElement("h1");
const rangeContainer = document.createElement("div");
const range = document.createElement("h2");
const rangeField = document.createElement("input");
const guessContainer = document.createElement("div");
const guess = document.createElement("h3");
const guessField = document.createElement("input");
const guessBtn = document.createElement("button");
const infoText = document.createElement("div");
const result = document.createElement("div");
const TEXT = {
  HEADER: "Random Number Game",
  RANGE: "Generate a number between 0 and ",
  GUESS: "Guess the number: ",
  LOSE: "You lost!",
  WIN: "You won!",
  INFO: (guess, random) => `You chose: ${guess}, the machine chose: ${random}.`,
};

// header
header.innerText = TEXT.HEADER;
// range
range.innerText = TEXT.RANGE;
range.style.display = "inline";
rangeField.type = "number";
rangeField.style.display = "inline";
rangeField.min = 0;
// guess
guess.innerText = TEXT.GUESS;
guess.style.display = "inline";
guessField.type = "number";
guessField.min = 0;
guessBtn.innerText = "Play!";
guessBtn.addEventListener("click", (e) => {
  const rangeValue = rangeField.value * 1;
  const guessValue = guessField.value * 1;
  if (rangeValue > 0 && guessValue > 0) {
    const randomValue = Math.floor(Math.random() * rangeValue);
    const won = guessValue === randomValue;
    const resultText = won ? TEXT.WIN : TEXT.LOSE;
    infoText.innerText = TEXT.INFO(guessValue, randomValue);
    result.innerText = resultText;
  } else {
    rangeField.value = null;
    guessField.value = null;
    infoText.innerText = "";
    result.innerText = "";
  }
});

document.body.appendChild(header);
rangeContainer.appendChild(range);
rangeContainer.appendChild(rangeField);
document.body.appendChild(rangeContainer);
guessContainer.appendChild(guess);
guessContainer.appendChild(guessField);
guessContainer.appendChild(guessBtn);
document.body.appendChild(guessContainer);
document.body.appendChild(infoText);
document.body.appendChild(result);

/**
 * 
✅ 0에서 사용자가 지정한 숫자까지의 범위에서 랜덤 한 숫자를 찾으세요. (범위는 0 이상 입력값 이하가 됩니다.)
✅ 범위에는 음수가 포함될 수 없습니다.
✅ 실시간으로 범위 값을 업데이트해야 합니다.
✅ 유저가 숫자를 선택한 후에 게임을 플레이할 수 있습니다.
✅ 유저에게 게임의 승패를 알려야 합니다.
 */
