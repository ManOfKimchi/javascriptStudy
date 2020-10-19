// #region createLottoMain

/**
 * 로또 추첨화면 메인
 * mainView - Lotto Number
 * <div>
 * ┌────────────────────┐
 * │ <div Lotto tools>  │
 * ├────────────────────┤
 * │ <div Lotto number> │
 * └────────────────────┘
 */
function createLottoMain() {
    log("createLottoMain", console.log);
    var lottoMain = document.createElement("div");
    lottoMain.id = "lotto-main";
    lottoMain.style.border = '1px solid black';
    lottoMain.append(createLottoMain_createLottoTools());
    lottoMain.append(createLottoMain_createLottoNum());

    return lottoMain;
}

/**
 * 로또 추첨화면 컨트롤 뷰
 * <div>
 * ┌─────────────────┐
 * │ <button Raffle> │
 * └─────────────────┘
 */
function createLottoMain_createLottoTools() {
    log("createLottoMain_createLottoTools", console.log);
    // 추첨 관련 툴
    var lottoTools = document.createElement("div");
    lottoTools.id = "lotto-tools";
    // 추첨버튼
    var lottertyButton = document.createElement("input");
    lottertyButton.id = "lotterty-button";
    lottertyButton.type = "button";
    lottertyButton.value = "추첨하기";
    lottoTools.append(lottertyButton);

    return lottoTools;
}

/**
 * 로또번호 보여주는 테이블
 * <table>
 * ┌───────────────────────┬───┬─────┐
 * │         Number        │   │Bonus│
 * ├───┬───┬───┬───┬───┬───┼───┼─────┤
 * │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ + │  7  │
 * └───┴───┴───┴───┴───┴───┴───┴─────┘ 
 */
function createLottoMain_createLottoNum() {
    log("createLottoMain_createLottoNum", console.log);
    var table = document.createElement("table");
    table.id = "lotto-table";
    var colLen = 7;
    // th
    var thead = document.createElement("thead");
    var thNum = document.createElement("th");
    thNum.colSpan = "6";
    thNum.textContent = "당첨번호";
    thead.append(thNum);
    var thPlus = document.createElement("th");
    thead.append(thPlus);
    var thBonus = document.createElement("th");
    thBonus.textContent = "보너스";
    thead.append(thBonus);
    // td
    var tbody = document.createElement("tbody");
    var tr = document.createElement("tr");
    var tdList = [];
    for (var c = 0; c < colLen; c++) {
        var td = document.createElement("td");
        td.id = "num-" + c;
        td.className = 'ans-number';
        tdList.push(td);
    }
    // 보너스 사이 + td 추가
    var plusTd = document.createElement('td');
    plusTd.id = 'num-+';
    plusTd.className = 'ans-bonus-splitter';
    plusTd.textContent = '+';
    tdList.splice(colLen - 1, 0, plusTd);
    tdList.forEach(el => tr.appendChild(el));

    tbody.append(tr);
    table.append(thead);
    table.append(tbody);

    return table;
}

// #endregion