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
var g_turnType = {
    'O': 0,
    'X': 1,
    'SET': 2
};
var g_curTurn = 0;
var g_score = {
    0: 0,
    1: 0
};

/**
 * 초기 데이터 세팅 
 */ 
// 게임판 데이터 초기화
var initGameData = function (scoreReset) {
    g_gameBoard = [];
    g_curTurn = 0;
    if (scoreReset) {
        g_score[0] = 0;
        g_score[1] = 0;
    }
    for (var r = 0; r < g_size; r++) {
        var curRow = [];
        for (var c = 0; c < g_size; c++) {
            curRow.push(g_cellType.EMPTY.value);
        }
        g_gameBoard.push(curRow);
    }
}