console.log('시작할 단어 입력');
var cur = prompt();;
var maxIncorrect = 5;
var incorrect = 0;
for (var i = 0; incorrect < maxIncorrect; i++) {
    var ans = prompt();
    if (cur[cur.length - 1] === ans[0]) {
        console.log('correct!');
        cur = ans;
    } else {
        incorrect += 1;
        console.log('incorrect!');
    }
}
console.log('game over...');