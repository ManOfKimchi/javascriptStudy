// 틱택토 화면 그리기
function initGamgeBoard () {    
    // 게임판 내부 버튼 생성
    var createButton = function (row, col) {
        var innerButton = document.createElement('button');
        innerButton.textContent = g_cellType.EMPTY.display;
        innerButton.id = `innerButton-${row}-${col}`;
        innerButton.className = 'cell-button';
        innerButton.onclick = innerButtonOnClick;
        innerButton.rowIndex = row;
        innerButton.colIndex = col;
        return innerButton;
    }

    // table
    var table = document.createElement('table');    
    table.id = 'game-table';
    for (var r = 0; r < g_size; r++) {
        // tr
        var tr = document.createElement('tr');
        for (var c = 0; c < g_size; c++) {
            // td
            var td = document.createElement('td');
            // button
            td.append(createButton(r, c));
            tr.append(td);
        }
        table.append(tr);
    }
    document.body.append(table);
}

// 상단 게임 정보 화면
function initGameStatus () {
    var statusTable = document.createElement('table');
    var tr = document.createElement('tr');

    // 턴 정보
    var turnInfo = document.createElement('td');
    turnInfo.id = 'cur-turn';
    turnInfo.textContent = _curTurnInfoStr(g_cellType[g_curTurn].text);
    turnInfo.className = 'status-td';
    tr.append(turnInfo);
    
    // 스코어 정보
    var scoreInfo = document.createElement('td');
    scoreInfo.id = 'score-info';
    scoreInfo.textContent = _scoreInfoStr(g_score[0], g_score[1]);
    scoreInfo.className = 'status-td';
    tr.append(scoreInfo);

    // 리셋 기능
    var resetButton = document.createElement('button');
    resetButton.id = 'game-reset';
    resetButton.className = 'button-reset';
    resetButton.textContent = '다시하기';
    resetButton.onclick = resetButtonClick;
    resetButton.hidden = true;
    tr.append(resetButton);

    statusTable.append(tr);
    document.body.append(statusTable);
}

function _curTurnInfoStr(curTurn) {
    return `현재 턴: ${curTurn}`;
}

function _scoreInfoStr(o, x) {
    return `O: ${o}, X: ${x}`;
}