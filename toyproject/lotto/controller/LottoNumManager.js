/**
 * Lotto Number 관련 데이터 계산 등
 */
class LottoNumManager {
    minNum() { return 1; }
    maxNum() { return 45; }
    constructor() {}

    /**
     * 로또 추첨 진행
     * @returns {Array<Number>} 추첨결과배열 (보너스 포함)
     */
    doRaffle() {
        const min = this.minNum() - 1, max = this.maxNum();
        let result = [];
        let balls = Array.from({ length: max }, (v, i) => i + 1);
        const poping = (maxLen) => {
            // 최대, 최솟값 포함한 랜덤난수 생성(MDN에서 갈무리)
            const idx = Math.floor(Math.random() * (maxLen - min + 1)) + min;
            return (balls.splice(idx, 1))[0];
        }
        Array.from({length: 7}).forEach(() => {
            result.push(poping(balls.length - 1));
        });
        return result;
    }
}

const test = () => {
    const lottoManager = new LottoNumManager();
    Array.from({length: 10}).forEach(() => console.log(lottoManager.doRaffle().join('\t')));
}
// test();