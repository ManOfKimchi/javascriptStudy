function initController() {
    log("initController", console.log);

    // 컴포넌트 연결
    let raffleButton = document.getElementById('lotterty-button');
    raffleButton.addEventListener('click', raffleButtonEvent);
}

function raffleButtonEvent(e) {
    const lottoManager = new LottoNumManager();
    const result = lottoManager.doRaffle();
    [].slice.call(document.getElementsByClassName('ans-number'))
    .forEach((numEl, i) => {
        numEl.textContent = result[i];
    });
}