import LottoResult from '../domain/LottoResult.js';
import Lotto from '../domain/Lotto.js';

describe('LottoResult 클래스 테스트', () => {
  const PURCHASE_AMOUNT = 8000;
  const WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];
  const BONUS_NUMBER = 7;

  const createLottos = (lottoArrays) => lottoArrays.map(arr => new Lotto(arr));

  test('수익률 계산이 정확하고 소수점 셋째 자리에서 반올림된다.', () => {
    const lottos = createLottos([
      [1, 2, 3, 10, 11, 12]
    ]);
    const result = new LottoResult(lottos, WINNING_NUMBERS, BONUS_NUMBER, PURCHASE_AMOUNT);

    expect(result.getReturnRate()).toBe(62.5);
  });

  test('2등 (5개 + 보너스) 당첨 시 결과 및 총 상금이 정확하다.', () => {
    const lottos = createLottos([
      [1, 2, 3, 4, 5, 7]
    ]);
    const result = new LottoResult(lottos, WINNING_NUMBERS, BONUS_NUMBER, PURCHASE_AMOUNT);

    const results = result.getResults();
    expect(results[2]).toBe(1);
    expect(result.getReturnRate()).toBe(375000);
  });
});
