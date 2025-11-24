import Lotto from '../domain/Lotto.js';
import { ERROR_MESSAGES } from '../constants.js';
import { COMMON_MESSAGES } from '@/shared/constants/messages.constants.js';

describe('Lotto 클래스 테스트', () => {
  const ERROR_PREFIX = COMMON_MESSAGES.PREFIX;

  test('유효한 로또 번호로 객체가 생성되고 오름차순으로 정렬된다.', () => {
    const unsortedNumbers = [45, 1, 10, 3, 40, 25];
    const expected = [1, 3, 10, 25, 40, 45];

    const lotto = new Lotto(unsortedNumbers);

    expect(lotto.getNumbers()).toEqual(expected);
  });

  test('로또 번호 개수가 6개를 초과하면 예외가 발생한다.', () => {
    const errorMessage = `${ERROR_PREFIX} ${ERROR_MESSAGES.INVALID_NUMBER_COUNT}`;
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(errorMessage);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    const errorMessage = `${ERROR_PREFIX} ${ERROR_MESSAGES.DUPLICATE_NUMBERS}`;
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(errorMessage);
  });

  test.each([
    [[1, 2, 3, 4, 5, 46]],
    [[0, 2, 3, 4, 5, 6]],
  ])('로또 번호가 범위(1~45)를 벗어나면 예외가 발생한다.', (invalidNumbers) => {
    const errorMessage = `${ERROR_PREFIX} ${ERROR_MESSAGES.INVALID_NUMBER_RANGE}`;
    expect(() => {
      new Lotto(invalidNumbers);
    }).toThrow(errorMessage);
  });
});
