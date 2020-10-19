/**
 * LottoNumber 데이터 모델 정의
 * 넘버 하나의 속성을 관리하냐 한 세트의 넘버들을 관리하냐
 * 후자로 하는게 맞을 것 같음 전자는 넘버 범위같은 부분에 대한 관리일것 같고
 * 후자는 넘버 셋을 생성, 관리 가능하니 전자를 포함 가능함 복잡한 데이터도 아니니..
 */
class LottoNum {
    minNum() { return 1; }
    maxNum() { return 45; }

    constructor (numbers) {
        // 보너스 넘버도 같이 모아놓나? 마지막 인덱스라는 보장으로?
        this.numbers = new Array(7);
        if (Array.isArray(numbers) && numbers.length === 7) {
            this.numbers = numbers;
        }
    }

    /**
     * 현재 넘버셋이 유효한지 검사
     * @returns {Boolean} true is valid
     */
    inputValidation() {
        const min = this.minNum(), max = this.maxNum();
        return Array.isArray(this.numbers) && this.numbers.every(n => {
            return min <= n && n <= max;
        });
    }
}

// let test = new LottoNum([1, 2, 3, 4, 5, 6, 7]);
// const testValid = test.inputValidation();
// let test2 = new LottoNum([1, 2, 3, 4, 5, 6, 99]);
// const testValid2 = test2.inputValidation();
// debugger;