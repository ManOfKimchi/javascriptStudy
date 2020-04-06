
// 데이터 검사
function validation (selectedRow, selectedCol) {
    
    // 완성된 데이터 있는지 검사

    // 틱택토 완성정보
    var tictactoeInfo = [];
    var _posAdd = function (curPos, newPos) {        
        if (newPos.length === g_size) {
            curPos = curPos.concat(newPos);
        }
        return curPos;
    }

    // 가로
    var verVal = 0;
    var verPos = [];
    for (var col = 0; col < g_size; col++) {
        if (g_gameBoard[selectedRow][col] == g_curTurn) {
            verVal += 1;
            verPos.push({
                row: selectedRow,
                col: col
            });
        }
    }
    tictactoeInfo = _posAdd(tictactoeInfo, verPos);

    // 세로
    var horVal = 0;
    var horPos = [];
    for (var row = 0; row < g_size; row++) {
        if (g_gameBoard[row][selectedCol] == g_curTurn) {
            horVal += 1;
            horPos.push({
                row: row,
                col: selectedCol
            });
        }
    }
    tictactoeInfo = _posAdd(tictactoeInfo, horPos);

    // 대각선 '\'                        
    var leftTopRightBottomVal = 0;
    var leftTopRightBottomPos = [];
    for (var row = 0, col = 0; row < g_size || col < g_size;) {
        if (g_gameBoard[row][col] == g_curTurn) {
            leftTopRightBottomVal += 1;
            leftTopRightBottomPos.push({
                row: row,
                col: col
            });
        } 
        row++;
        col++;
    }
    tictactoeInfo = _posAdd(tictactoeInfo, leftTopRightBottomPos);

    // 대각선 '/'
    var rightTopLeftBottomVal = 0;
    var rightTopLeftBottomPos = [];
    for (var row = 0, col = g_size - 1; row < g_size || col >= 0;) {
        if (g_gameBoard[row][col] == g_curTurn) {
            rightTopLeftBottomVal += 1;
            rightTopLeftBottomPos.push({
                row: row,
                col: col
            });
        }
        row++;
        col--;
    }
    tictactoeInfo = _posAdd(tictactoeInfo, rightTopLeftBottomPos);

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

    // 좌표정보 중복제거
    tictactoeInfo = tictactoeInfo.filter((pos, idx) => tictactoeInfo.indexOf(pos) === idx);
    
    // 판별결과
    var gameResult = g_gameResultType.NotEnd;
    if (verVal === g_size || horVal === g_size || leftTopRightBottomVal === g_size || rightTopLeftBottomVal === g_size) {
        gameResult = g_curTurn === g_turnType.O ? g_gameResultType.O_Won : g_gameResultType.X_Won;
    } else if (allSelected) {
        gameResult = g_gameResultType.Draw;
    }
    
    console.log(`검사결과   가로: ${verVal}, 세로: ${horVal}, 대각선(좌상우하): ${leftTopRightBottomVal}, 대각선(우상좌하): ${rightTopLeftBottomVal}`);
    console.log(`=> ${Object.keys(g_gameResultType).find(key => g_gameResultType[key] === gameResult)}`);

    return {
        result: gameResult,
        posInfo: tictactoeInfo
    };
}

// 검사 결과에 대한 게임 진행 데이터, 화면 수정
function gameOverOrProceed(gameResult, posInfo) {
    switch(gameResult) {
        case g_gameResultType.NotEnd:
            console.log(`현재 턴: ${g_curTurn}`);   
            g_curTurn = (g_curTurn + 1) % 2;
            //document.getElementById('cur-turn').textContent = `현재 턴: ${g_cellType[g_curTurn].text}`;
            document.getElementById('cur-turn').textContent = _curTurnInfoStr(g_curTurn);
            console.log(`다음 턴: ${g_curTurn}`);
            break;
        case g_gameResultType.O_Won:
        case g_gameResultType.X_Won:  
            g_score[g_curTurn]++;
            posInfo.map(pos => {
                document.getElementById(`innerButton-${pos.row}-${pos.col}`).style.backgroundColor = "greenyellow";
            });
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
            var result = validation(row, col);
            // 데이터, 화면 업데이트
            gameOverOrProceed(result.result, result.posInfo);

            // cpu 모드면 다음 턴 자동 진행
            if (result.result === g_gameResultType.NotEnd && g_gameMode === g_gameModeType.cpu) {
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
    
    // 컴퓨터가 선택한 위치로 게임 진행
    var cpuSelected = function (r, c) {
        console.log(`컴퓨터가 선택한 위치 ${r}, ${c}`);
        // 값 갱신
        g_gameBoard[r][c] = g_curTurn;
        // 화면 갱신
        var btn = document.getElementById(`innerButton-${r}-${c}`);
        btn.textContent = g_cellType[g_curTurn].text;
        btn.style.color = g_cellType[g_curTurn].color;
        var cpuResult = validation(r, c);
        gameOverOrProceed(cpuResult.result, cpuResult.posInfo);
    }
    
    // 계산 후 적정 셀 선택
    // 계산 부분
    var selected = null;

    // 난이도에 해당하는 선택 좌표 계산
    // 무조건 빈칸 찾아서 선택하는 원숭이급
    //var selected = monkey(g_gameBoard, g_curTurn);
    // 이기고 막는 곳은 둘 줄 아는 노말급
    var selected = normal(g_gameBoard, g_curTurn);

    if (!selected) {
        console.log('cpu가 뭔가 실수했나본데요?');
        return;
    }

    // cpu 선택 실행
    cpuSelected(selected.row, selected.col);
}