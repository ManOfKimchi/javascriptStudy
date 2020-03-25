// 컨트롤 관련
// 데이터 검사
function validation (selectedRow, selectedCol) {
    var verVal = 0;
    // 가로
    for (var col = 0; col < g_size; col++) {
        if (g_gameBoard[selectedRow][col] == g_curTurn) verVal += 1;
    }
    // 세로
    var horVal = 0;
    for (var row = 0; row < g_size; row++) {
        if (g_gameBoard[row][selectedCol] == g_curTurn) horVal += 1;
    }
    // 대각선                        
    var leftTopRightBottomVal = 0;
    for (var row = 0, col = 0; row < g_size || col < g_size;) {
        if (g_gameBoard[row][col] == g_curTurn) leftTopRightBottomVal += 1;
        row++;
        col++;
    }
    var rightTopLeftBottomVal = 0;
    for (var row = 0, col = g_size - 1; row < g_size || col >= 0;) {
        if (g_gameBoard[row][col] == g_curTurn) rightTopLeftBottomVal += 1;
        row++;
        col--;
    }

    console.log(`검사결과   가로: ${verVal}, 세로: ${horVal}, 대각선(좌상우하): ${leftTopRightBottomVal}, 대각선(우상좌하): ${rightTopLeftBottomVal}`);
    // 특정 플레이어 승리 시 처리
    if (verVal === g_size) {
        for (var col = 0; col < g_size; col++) {
            document.getElementById(`innerButton-${selectedRow}-${col}`).style.backgroundColor = "greenyellow";
        }
    }
    if (horVal === g_size) {
        for (var row = 0; row < g_size; row++) {
            document.getElementById(`innerButton-${row}-${selectedCol}`).style.backgroundColor = "greenyellow";
        }
    }
    if (leftTopRightBottomVal === g_size) {
        for (var row = 0, col = 0; row < g_size || col < g_size;) {
            document.getElementById(`innerButton-${row}-${col}`).style.backgroundColor = "greenyellow";
            row++;
            col++;
        }
    }
    if (rightTopLeftBottomVal === g_size) {
        for (var row = 0, col = g_size - 1; row < g_size || col >= 0;) {
            document.getElementById(`innerButton-${row}-${col}`).style.backgroundColor = "greenyellow";
            row++;
            col--;
        }
    }

    // 비김
    var allSelected = true;
    for (var r = 0; r < g_size; r++) {
        for (var c = 0; c < g_size; c++) {
            if (g_gameBoard[r][c] === g_cellType.EMPTY.value) {
                allSelected = false;
                break;
            }
        }
    }

    var gameResult = g_gameResultType.NotEnd;
    if (verVal === g_size || horVal === g_size || leftTopRightBottomVal === g_size || rightTopLeftBottomVal === g_size) {
        gameResult = g_curTurn === g_turnType.O ? g_gameResultType.O_Won : g_gameResultType.X_Won;
    } else if (allSelected) {
        gameResult = g_gameResultType.Draw;
    }
    gameOverOrProceed(gameResult);
    
    // if (allSelected) {
    //     g_curTurn = g_turnType.SET;
    //     document.getElementById('cur-turn').textContent = '비겼네요';
    //     document.getElementById('game-reset').hidden = false;
    // } else if (verVal === g_size ||
    //     horVal === g_size ||
    //     leftTopRightBottomVal === g_size ||
    //     rightTopLeftBottomVal === g_size) {
    //     // 승리 알림
    //     g_score[g_curTurn]++;
    //     document.getElementById('score-info').textContent = `O: ${g_score[0]}, X: ${g_score[1]}`;
    //     document.getElementById('cur-turn').textContent = `${g_cellType[g_curTurn].text}승리`;
    //     g_curTurn = g_turnType.SET;
    //     document.getElementById('game-reset').hidden = false;
    // } else {
    //     // 턴 넘김                
    //     console.log(`현재 턴: ${g_curTurn}`);   
    //     g_curTurn = (g_curTurn + 1) % 2;
    //     document.getElementById('cur-turn').textContent = `현재 턴: ${g_cellType[g_curTurn].text}`;
    //     console.log(`다음 턴: ${g_curTurn}`);
    // }

    // 화면에 라인 그리기(svg 학습이 필요함)
    // 다시하기?
}

// 검사 결과에 대한 게임 진행 데이터, 화면 수정
function gameOverOrProceed(gameResult) {
    switch(gameResult) {
        case g_gameResultType.NotEnd:
            console.log(`현재 턴: ${g_curTurn}`);   
            g_curTurn = (g_curTurn + 1) % 2;
            document.getElementById('cur-turn').textContent = `현재 턴: ${g_cellType[g_curTurn].text}`;
            console.log(`다음 턴: ${g_curTurn}`);
            break;
        case g_gameResultType.O_Won:
        case g_gameResultType.X_Won:  
            g_score[g_curTurn]++;
            document.getElementById('score-info').textContent = `O: ${g_score[0]}, X: ${g_score[1]}`;
            document.getElementById('cur-turn').textContent = `${g_cellType[g_curTurn].text}승리`;
            g_curTurn = g_turnType.SET;
            document.getElementById('game-reset').hidden = false;
            break;
        case g_gameResultType.Draw:
            g_curTurn = g_turnType.SET;
            document.getElementById('cur-turn').textContent = '비겼네요';
            document.getElementById('game-reset').hidden = false;
            break;
    }
}

/**
 * 버튼 클릭 이벤트
 * @param {*} e 
 */
var innerButtonOnClick = function (e) {            
    if (g_curTurn === g_turnType.SET) return;

    var row = e.target.rowIndex;
    var col = e.target.colIndex;
    // 이미 선택한 경우 스킵
    console.log(`선택한 위치: ${row} ${col} : ${g_gameBoard[row][col]}`);    

    switch (g_gameBoard[row][col]) {
        case g_cellType.EMPTY.value:
            // 값 갱신
            g_gameBoard[row][col] = g_curTurn;
            // 화면 갱신
            e.target.textContent = g_cellType[g_curTurn].text;
            e.target.style.color = g_cellType[g_curTurn].color;            
            validation(row, col);
            if (g_gameMode === g_gameModeType.cpu) {
                computerSelect();
            }
            break;
        case g_cellType.O.value:
        case g_cellType.X.value:
            console.log('아무 것도 일어나지 않음');
            break;
        default: 
            console.log('몬가... 몬가 잘못되고 있음..');
            break;
    }
}

var resetButtonClick = function (e) {
    document.getElementById('game-table').remove();    
    initGameData();
    initGamgeBoard(); 
    resetGameStatus();   
    e.target.hidden = true;
}

// 상단 정보 리셋
function resetGameStatus(scoreReset) {
    var turnInfo = document.getElementById('cur-turn');
    turnInfo.textContent = _curTurnInfoStr(g_cellType[g_curTurn].text);

    if (scoreReset) {
        var scoreInfo = document.getElementById('score-info');
        scoreInfo.textContent = _scoreInfoStr(g_score[0], g_score[1]);
    }
}

// CPU 모드
function computerSelect() {
    
    // 계산 후 적정 셀 선택
    // 계산 부분


    // 데이터 셋 부분
    // 화면 수정 부분    
    // validation 실행하여 화면, 데이터 업데이트
    // validation();
}