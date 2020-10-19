/**
 * 로또 추첨기 화면 구성
 */

/**
 * mainView 구성
 * <div>
 * ┌────────────────────┐
 * │ <div Lotto Number> │
 * ├────────────────────┤
 * │ <div User Number>  │
 * ├────────────────────┤
 * │ <div Result>       │
 * └────────────────────┘
 */
function initView() {
    log("initView", console.log); 
    var mainEl = document.createElement("div");   
    mainEl.append(createLottoMain());
    mainEl.append(createUserMain());
    mainEl.append(createResults());

    document.body.append(mainEl);
}