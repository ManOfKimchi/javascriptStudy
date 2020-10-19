var debug = true;

// values (나중에 묶어서 작업)
var g_type = {
    AUTO: 1,
    MANUAL: 2
}
var g_currentType = g_type.MANUAL;


function main() {
    initView();
    initController();
}

// Utils

function log(args, logFn) {
    if (typeof logFn !== "function") {
        console.error("잘못된 콘솔 함수를 넘김");
        return;
    }
    debug ? logFn(args) : null;
}

function getKeyByValue(obj, val) {
    return Object.keys(obj).find(x => obj[x] === val);
}

main();