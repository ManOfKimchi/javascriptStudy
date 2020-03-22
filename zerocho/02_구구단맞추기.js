var game = function (level) {
    var randNum = function (max) {
        return Math.ceil(Math.random() * max);
    }
    var calc = function (nums) {
        return nums.reduce((acc, cur) => acc * cur);
    }
    var multiplyGame = function () {
        // config
        var num = [];
        var inputLen = level ? level : 2;
        var maxNum = 9;
        // create random numer
        for (var i = 0; i < inputLen; i++) {
            num.push(randNum(maxNum));
        }
        // calculating
        var ans = calc(num);
        // user input
        var questionMsg = `${num.map((v, i, a) => a.length === i + 1 ? v : v + ' X ').join('')}`;
        var userAns = Number(prompt(`${questionMsg}`));
        // check answer
        console.log(userAns === ans ? 'good': '???');
        // result return
        return userAns === ans;
    }

    // game config
    var playCount = 5;
    var incorrect = 0;
    var maxIncorrect = 5;
    var startTime = new Date();
    // play game
    for (var i = 0; i < playCount && incorrect < 5;) {
        multiplyGame() ? i++ : incorrect++;
        console.log(i, incorrect);
    }
    // results
    var time = new Date() - startTime;
    var timeSec = parseInt(time / 1000);
    var timeMil = time % 1000;
    var resultMsg = incorrect >= 5 ? 'game over' : `game end. your record: ${timeSec}.${timeMil}s`
    console.log(resultMsg);  
}
// game start
game();