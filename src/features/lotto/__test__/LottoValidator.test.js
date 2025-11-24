import LottoValidator from '../domain/LottoValidator.js';
import { ERROR_MESSAGES } from '../constants.js';
import { COMMON_MESSAGES } from '@/shared/constants/messages.constants.js';

describe('LottoValidator 클래스 테스트', () => {
  const ERROR_PREFIX = COMMON_MESSAGES.PREFIX;

  describe('validatePurchaseAmount', () => {
    test.each([1000, 5000, 10000])('유효한 금액(%p)은 통과한다.', (amount) => {
      expect(() => LottoValidator.validatePurchaseAmount(amount)).not.toThrow();
    });

    const invalidAmountError = `${ERROR_PREFIX} ${ERROR_MESSAGES.INVALID_AMOUNT}`;
    test.each([0, 999, 1001, -1])('1000원 단위가 아니면 예외 발생.', (amount) => {
      expect(() => LottoValidator.validatePurchaseAmount(amount)).toThrow(invalidAmountError);
    });
  });

  describe('validateLottoNumbers', () => {
    test('6개 번호와 중복이 없으면 통과한다.', () => {
      expect(() => LottoValidator.validateLottoNumbers([1, 10, 20, 30, 40, 45])).not.toThrow();
    });

    test('번호 개수가 6개가 아니면 예외 발생.', () => {
      const numberCountError = `${ERROR_PREFIX} ${ERROR_MESSAGES.INVALID_NUMBER_COUNT}`;
      expect(() => LottoValidator.validateLottoNumbers([1, 2, 3, 4, 5]))
        .toThrow(numberCountError);
    });

    test('중복된 번호가 있으면 예외 발생.', () => {
      const duplicateError = `${ERROR_PREFIX} ${ERROR_MESSAGES.DUPLICATE_NUMBERS}`;
      expect(() => LottoValidator.validateLottoNumbers([1, 2, 3, 4, 5, 5]))
        .toThrow(duplicateError);
    });
  });

  describe('validateBonusNumber', () => {
    const WINNING = [1, 2, 3, 4, 5, 6];

    const duplicateBonusError = `${ERROR_PREFIX} ${ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER}`;
    test('당첨 번호와 중복되면 예외 발생.', () => {
      expect(() => LottoValidator.validateBonusNumber(6, WINNING)).toThrow(duplicateBonusError);
    });

    const invalidRangeError = `${ERROR_PREFIX} ${ERROR_MESSAGES.INVALID_NUMBER_RANGE}`;
    test('범위를 벗어나면 예외 발생.', () => {
      expect(() => LottoValidator.validateBonusNumber(46, WINNING)).toThrow(invalidRangeError);
    });
  });
});
