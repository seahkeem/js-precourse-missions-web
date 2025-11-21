import Calculator from '../domain/Calculator.js';
import { COMMON_MESSAGES } from '@/shared/constants/messages.constants.js';

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('validateAndParseNumbers', () => {
    test('빈 문자열은 0으로 반환', () => {
      expect(calculator.validateAndParseNumbers([''])).toEqual([0]);
    });

    test('숫자 문자열 배열을 숫자로 변환', () => {
      expect(calculator.validateAndParseNumbers(['1', '2', '3'])).toEqual([1, 2, 3]);
    });

    test('숫자가 아닌 값이면 에러 발생', () => {
      expect(() =>
        calculator.validateAndParseNumbers(['1', 'a', '3'])
      ).toThrow(`${COMMON_MESSAGES.ERROR_PREFIX}${COMMON_MESSAGES.ERROR_INVALID_NUMBER}'a'`);
    });

    test('음수 값이면 에러 발생', () => {
      expect(() =>
        calculator.validateAndParseNumbers(['-1', '2'])
      ).toThrow(`${COMMON_MESSAGES.ERROR_PREFIX}${COMMON_MESSAGES.ERROR_NEGATIVE_NUMBER}'-1'`);
    });
  });

  describe('sum', () => {
    test('숫자 배열 합산', () => {
      expect(calculator.sum([1, 2, 3])).toBe(6);
      expect(calculator.sum([0, 0, 0])).toBe(0);
    });
  });
});
