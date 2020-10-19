// #region createUserMain

/**
 * 유저 인터페이스 메인
 * <div>
 * ┌───────────────────────────┐
 * │ <table User lotto number> │
 * ├───────────────────────────┤
 * │ <div User tools>          │
 * └───────────────────────────┘
 */
function createUserMain() {
    log("createUserMain", console.log);
    var userMain = document.createElement("div");    
    userMain.style.border = '1px solid black';
    userMain.append(createUserMain_createUserNum());
    userMain.append(createUserMain_createUserTools());

    return userMain;
}

/**
 * 유저 번호 응모 영수증 테이블
 * --------------------------------------------
 * <table>
 * ┌───┬──────────────┬───┬───┬───┬───┬───┬───┐
 * │ A │  Auto/Manual │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │
 * ├───┼──────────────┼───┼───┼───┼───┼───┼───┤
 * │ B │  Auto/Manual │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │
 * ├───┼──────────────┼───┼───┼───┼───┼───┼───┤
 * │ C │  Auto/Manual │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │
 * ├───┼──────────────┼───┼───┼───┼───┼───┼───┤
 * │ D │  Auto/Manual │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │
 * ├───┼──────────────┼───┼───┼───┼───┼───┼───┤
 * │ E │  Auto/Manual │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │
 * └───┴──────────────┴───┴───┴───┴───┴───┴───┘
 * --------------------------------------------
 */
function createUserMain_createUserNum() {
    log("createUserMain_createUserNum", console.log);
    var rowLen = 5;
    var lottoNumLen = 6;
    var numbererArr = ['A', 'B', 'C', 'D', 'E'];
    var table = document.createElement("table");
    for(var i = 0; i < rowLen; i++) {
        var tr = document.createElement("tr");
        // Numberer
        var numberer = document.createElement("td");
        numberer.textContent = numbererArr[i];
        tr.append(numberer);
        // Auto/Manual
        var type = document.createElement("td");
        type.textContent = getKeyByValue(g_type, g_currentType);
        tr.append(type);
        // Numbers
        for(var j = 0; j < lottoNumLen; j++) {
            var td = document.createElement("td");
            tr.append(td);
        }
        table.append(tr);
    }

    return table;
}

/**
 * 응모 용지
 * ┌─────┬────────────┬────────────┬────────────┬────────────┬────────────┐
 * │Image│ A 1000won  │ B 1000won  │ C 1000won  │ D 1000won  │ E 1000won  │
 * │     ├────────────┼────────────┼────────────┼────────────┼────────────┤
 * │     │ [1] ~ [45] │ [1] ~ [45] │ [1] ~ [45] │ [1] ~ [45] │ [1] ~ [45] │
 * │     │   Auto [ ] │   Auto [ ] │   Auto [ ] │   Auto [ ] │   Auto [ ] │
 * │     │ Cancel [ ] │ Cancel [ ] │ Cancel [ ] │ Cancel [ ] │ Cancel [ ] │
 * └─────┴────────────┴────────────┴────────────┴────────────┴────────────┘
 */
function createUserMain_drawPaper() {
    log("createUserMain_drawPaper", console.log);
    var table = document.createElement("table");
    var head = document.createElement("tr");
    // image
    var titleImage = document.createElement("th");
    titleImage.rowSpan = 10;
    head.append(titleImage);
    // head
    var attempSize = 5;
    var numberer = ['A', 'B', 'C', 'D', 'E'];
    for (var i = 0; i < attempSize; i++) {
        var attemptTh = document.createElement("th");
        attemptTh.textContent = `${numberer[i]} 1,000원`;
        head.append(attemptTh);
    }
    
    table.append(head);

    // check content
    // var contentRowSize = 9;
    // for (var i = 0; i < contentRowSize; i++) {
    //     // 
    //     var 
    // }
}

/**
 * 유저 번호 입력 화면 컨트롤
 * <div>
 * ┌───────────────┐
 * │ <button Auto> │
 * └───────────────┘
 */
function createUserMain_createUserTools() {
    log("createUserMain_createUserTools", console.log);
    var userControll = document.createElement("div");
    var autoBtn = document.createElement("input");
    autoBtn.type = 'button';
    autoBtn.value = '자동';
    userControll.append(autoBtn);

    return userControll;
}

// #endregion