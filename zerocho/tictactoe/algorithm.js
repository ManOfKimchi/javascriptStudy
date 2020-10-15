/**
 * cpu 알고리즘 설계
 * 
 * 공통사항
 * @param {Array[Array]} gameBoard 
 * 진행중인 2차원 배열 게임판 데이터
 *      [[x, x, x],
 *       [x, x, x],
 *       [x, x, x]]
 * @param {Number} turn
 * 현재 턴 정보, 0(O) 또는 1(X)
 * 
 * @return {Object} 
 * 결과 좌표
 *      return {
 *          row: x,
 *          col: y
 *      }
 * 형태로 리턴함
 * 
 * 셀 데이터 판별조건
 * -1: 선택안됨
 *  0: O가 선택
 *  1: X가 선택
 */

var gameSize = 3;
var cellType = {
    EMPTY: -1,
    O: 0,
    X: 1
};

/**
 * 인덱스 순서로 빈칸 찾아서 선택하는 유인원급
 */
function monkey(gameBoard) {
    var result = null;
    for (var r = 0; r < gameSize; r++) {
        if (result) break;
        for (var c = 0; c < gameSize; c++) {
            if (gameBoard[r][c] === cellType.EMPTY) {
                result = {
                    row: r,
                    col: c
                };
                break;
            }
        }
    }
    if (!result) {
        console.log('cpu: 뭘 골라야할지 모르겠어요 ㅜㅜ');
    }

    return result;
}

function normal(gameBoard, turn) {
    // 다음 둘 곳을 계산할 줄 아는 알고리즘 작성

    // 현재 게임보드 분석

    // 우선순위
    // 1 내가 이길 수 있는 곳이 있다
    // 2 무조건 막아야 하는 부분이 있다
    // 3 유리한 곳을 선택해서 골라야 함
    
    // 1, 2는 쉽게 계산 가능한데 3은 어떻게 짤 지 고민해야 함
    // 3까지 완벽하게 짠다면 expert 난이도로 명명하여 적용
    // 현재 난이도는 랜덤하게 선택하는 것으로 결정

    // 첫 수가 가운데일 때 대각선에 무조건 둬야 하는 조건 추가

    var result = null;

    // 지금 두면 이길 수 있는 위치 찾기
    // 가로줄
    //  0, 0    0, 1    0, 2
    //  1, 0    1, 1    1, 2
    //  2, 0    2, 1    2, 2
    var rowCells = [];
    for (var r = 0; r < gameSize; r++) {
        rowCells = [];
        for (var c = 0; c < gameSize; c++) {
            // 상대가 체크한게 있으면 불가능
            if (gameBoard[r][c] !== turn) break;

            // 체크한게 있다면 push
            if (gameBoard[r][c] === cellType.EMPTY) {
                rowCells.push({
                    row: r,
                    col: c
                });
            }
        }
        if (rowCells.length === 1) break;
    }    
    // 빈칸이 하나면 남은 빈칸을 선택하도록 함
    if (rowCells.length === 1) {
        console.log('가로', rowCells);
        return {
            row: rowCells[0].row,
            col: rowCells[0].col
        };
    }

    // 세로줄
    var colCells = [];
    for (var c = 0; c < gameSize; c++) {
        colCells = [];
        for (var r = 0; r < gameSize; r++) {
            // 상대가 체크한게 있으면 불가능
            if (gameBoard[r][c] !== turn) break;

            // 체크한게 있다면 push
            if (gameBoard[r][c] === cellType.EMPTY) {
                colCells.push({
                    row: r,
                    col: c
                });
            }
        }
        if (colCells.length === 1) break;
    }
    // 빈칸이 하나면 남은 빈칸을 선택하도록 함
    if (colCells.length === 1) {
        console.log('세로', colCells);
        return {
            row: colCells[0].row,
            col: colCells[0].col
        };
    }

    // 대각선
    //  0, 0    1, 1    2, 2
    //  0, 2    1, 1    2, 0
    var leftCells = [];
    var rightCells = [];
    var passLeft = false;
    var passRight = false;
    for (var r = 0, c = 0; r < gameSize && c < gameSize;) {
        var curLeft = gameBoard[r][c];
        var curRight = gameBoard[r][gameSize - 1 - c];
        // '\'
        if (!passLeft) {
            if (curLeft === cellType.EMPTY) {
                leftCells.push({
                    row: r,
                    col: c
                });
            } else if (curLeft !== turn) {
                passLeft = true;
                leftCells = [];
            }
        }
        
        // '/'
        if (!passRight) {
            if (curRight === cellType.EMPTY) {
                rightCells.push({
                    row: r,
                    col: gameSize - 1 - c
                });
            } else if (curRight !== turn) {
                passRight = true;
                rightCells = [];
            }
        }

        r++;
        c++;
    }
    console.log('');
    console.log('대각', leftCells);
    console.log('대각', rightCells);
    console.log('');
    // 대각선 검증
    if (leftCells.length === 1) {
        return {
            row: leftCells[0].row,
            col: leftCells[0].col
        };
    }
    if (rightCells.length === 1) {
        return {
            row: rightCells[0].row,
            col: rightCells[0].col
        }
    }


    // 막아야 하는 위치 찾기
    // 현재 빈칸포함 상대가 두칸 선택한 구역 찾기
    // 가로
    var rowCells = [];
    for (var r = 0; r < gameSize; r++) {
        rowCells = [];
        for (var c = 0; c < gameSize; c++) {
            if (gameBoard[r][c] === turn) {
                rowCells = [];
                break;
            } else if (gameBoard[r][c] === cellType.EMPTY) {
                rowCells.push({
                    row: r,
                    col: c
                });
            }
        }
        if (rowCells.length === 1) break;
    }
    if (rowCells.length === 1) {
        console.log('가로막아', rowCells);
        return {
            row: rowCells[0].row,
            col: rowCells[0].col
        };
    }
    // 세로
    var colCells = [];
    for (var c = 0; c < gameSize; c++) {
        colCells = [];
        for (var r = 0; r < gameSize; r++) {
            if (gameBoard[r][c] === turn) {
                colCells = [];
                break;
            } else if (gameBoard[r][c] === cellType.EMPTY) {
                colCells.push({
                    row: r,
                    col: c
                });
            }
        }
        if (colCells.length === 1) break;
    }
    if (colCells.length === 1) {
        console.log('세로막아', colCells);
        return {
            row: colCells[0].row,
            col: colCells[0].col
        };
    }
    // 대각선
    var leftCells = [];
    var rightCells = [];
    var passLeft = false;
    var passRight = false;
    for (var r = 0, c = 0; r < gameSize && c < gameSize;) {
        var curLeft = gameBoard[r][c];
        var curRight = gameBoard[r][gameSize - 1 - c];

        // '\'
        if (!passLeft) {
            if (curLeft === turn) {
                passLeft = true;
                leftCells = [];
            } else if (curLeft === cellType.EMPTY) {
                leftCells.push({
                    row: r,
                    col: c
                });
            }
        }
        
        // '/'
        if (!passRight) {
            if (curRight === turn) {
                passRight = true;
                rightCells = [];
            } else if (curRight === cellType.EMPTY) {
                rightCells.push({
                    row: r,
                    col: gameSize - 1 - c
                });
            }
        }

        r++;
        c++;
    }
    console.log('');
    console.log(leftCells);
    console.log(rightCells);
    console.log('');
    // 대각선 검증
    if (leftCells.length === 1) {
        return {
            row: leftCells[0].row,
            col: leftCells[0].col
        };
    }
    if (rightCells.length === 1) {
        return {
            row: rightCells[0].row,
            col: rightCells[0].col
        }
    }

    // 가운데 칸만 선택되어 있으면 대각선 선택
    var emptyCount = 0;
    for(var r = 0; r < gameSize; r++) {
        for(var c = 0; c < gameSize; c++) {
            if (gameBoard[r][c] === cellType.EMPTY) emptyCount++;
        }
    }
    var centerPos = Math.floor(gameSize / 2);
    if (emptyCount === (gameSize * gameSize - 1)) {
        if (gameBoard[centerPos][centerPos] === cellType.O) {
            // 아무 대각선이나 선택
            return {
                row: 0,
                col: gameSize - 1
            }
        } else {
            // 첫 수인데 가운데 선택안했으면 당연히 가운데 선택
            return {
                row: centerPos,
                col: centerPos
            }
        }
    }

    // 어디놔야 할지 모르겠어요
    // 선택되지 않은 좌표 수집
    // 랜덤값으로 정해서 리턴
    var emptyPosList = [];
    for (var r = 0; r < gameSize; r++) {
        for (var c = 0; c < gameSize; c++) {
            if (gameBoard[r][c] === cellType.EMPTY) {
                emptyPosList.push({
                    row: r,
                    col: c
                });
            }
        }
    }
    var idx = Math.floor(Math.random() * emptyPosList.length);

    console.log('랜덤위치', emptyPosList[idx]);
    return emptyPosList[idx];
}