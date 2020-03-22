/**
 * 게임 실행
 */
function game() {

    /**
     * 프로퍼티
     */
    // 틱택토이므로 3으로 고정
    var g_size = 3;
    // 게임판 배열 성능문제 없으므로 개발편의를 위해 2차원배열로 사용
    var g_gameBoard = [];
    // 셀 데이터 관리용
    var g_cellType = {
        EMPTY: {
            value: -1,
            display: ''
        },
        O: {
            value: 0,
            display: 'O'
        },
        X: {
            value: 1,
            display: 'X'
        },
        0: {
            text: 'O',
            color: 'blue'
        },
        1: {
            text: 'X',
            color: 'brown'
        }
    };
    // 턴 정보 관리용(선턴 O로 고정했음)
    var g_curTurn = 0;
    
    /**
     * 초기 데이터 세팅 
     */ 
    // 게임판 데이터 초기화
    var initGameData = function () {
        for (var r = 0; r < g_size; r++) {
            var curRow = [];
            for (var c = 0; c < g_size; c++) {
                curRow.push(g_cellType.EMPTY.value);
            }
            g_gameBoard.push(curRow);
        }
    }
    
    // 화면 그리기
    var drawBoard = function () {
        // 컨트롤 관련
        // 데이터 검사
        var validation = function (selectedRow, selectedCol, curTurn) {
            var verVal = 0;
            // 가로
            for (var col = 0; col < g_size; col++) {
                if (g_gameBoard[selectedRow][col] == curTurn) verVal += 1;
            }
            // 세로
            var horVal = 0;
            for (var row = 0; row < g_size; row++) {
                if (g_gameBoard[row][selectedCol] == curTurn) horVal += 1;
            }
            // 대각선                        
            var leftTopRightBottomVal = 0;
            for (var row = 0, col = 0; row < g_size || col < g_size;) {
                if (g_gameBoard[row][col] == curTurn) leftTopRightBottomVal += 1;
                row++;
                col++;
            }
            var rightTopLeftBottomVal = 0;
            for (var row = 0, col = g_size - 1; row < g_size || col >= 0;) {
                if (g_gameBoard[row][col] == curTurn) rightTopLeftBottomVal += 1;
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
            // 승리 알림
            // 화면에 라인 그리기
            // 다시하기?
        }

        /**
         * 버튼 클릭 이벤트
         * @param {*} e 
         */
        var innerButtonOnClick = function (e) {            
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
                    
                    validation(row, col, g_curTurn);
                    // 턴 넘김                
                    console.log(`현재 턴: ${g_curTurn}`);    
                    g_curTurn = (g_curTurn + 1) % 2;                    
                    console.log(`다음 턴: ${g_curTurn}`);
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

        // table
        var table = document.createElement('table');
        // tr, td
        for (var r = 0; r < g_size; r++) {
            var tr = document.createElement('tr');
            for (var c = 0; c < g_size; c++) {
                var td = document.createElement('td');
                // 빈 버튼으로 넣어보자
                var innerButton = document.createElement('button');
                innerButton.textContent = g_cellType.EMPTY.display;
                innerButton.id = `innerButton-${r}-${c}`;
                innerButton.onclick = innerButtonOnClick;
                innerButton.rowIndex = r;
                innerButton.colIndex = c;
                td.append(innerButton);

                tr.append(td);
            }
            table.append(tr);
        }
        document.body.append(table);
    }

    
    initGameData();
    drawBoard();


    /**
     * 게임 구동 관련
     */
    
}

game();