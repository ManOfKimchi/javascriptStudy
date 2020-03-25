/**
 * cpu 알고리즘 설계
 * 
 * 공통사항
 * @param {Array[Array]} gameBoard 
 * 진행중인 2차원 배열 게임판 데이터
 *      [[x, x, x],
 *       [x, x, x],
 *       [x, x, x]]
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