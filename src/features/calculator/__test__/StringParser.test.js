import StringParser from '../domain/StringParser.js';
import { COMMON_MESSAGES } from '@/shared/constants/messages.constants.js';

describe('StringParser', () => {
  let parser;

  beforeEach(() => {
    parser = new StringParser();
  });

  test('기본 구분자 반환', () => {
    const result = parser.parse('1,2:3');
    expect(result.delimiters).toEqual([',', ':']);
    expect(result.numbersString).toBe('1,2:3');
  });

  test('커스텀 구분자 반환', () => {
    const result = parser.parse('//;\n1;2;3');
    expect(result.delimiters).toEqual([';']);
    expect(result.numbersString).toBe('1;2;3');
  });

  test('커스텀 구분자 선언 불완전 시 에러', () => {
    expect(() => parser.parse('//\n1;2')).toThrow(
      `${COMMON_MESSAGES.ERROR_PREFIX}${COMMON_MESSAGES.ERROR_INCOMPLETE_DECLARATION}`
    );
  });

  test('커스텀 구분자가 공백이면 에러', () => {
    expect(() => parser.parse('// \n1 2')).toThrow(
      `${COMMON_MESSAGES.ERROR_PREFIX}${COMMON_MESSAGES.ERROR_INVALID_DELIMITER}`
    );
  });

  test('커스텀 구분자가 여러 문자면 에러', () => {
    expect(() => parser.parse('//12\n1 2')).toThrow(
      `${COMMON_MESSAGES.ERROR_PREFIX}${COMMON_MESSAGES.ERROR_INVALID_DELIMITER}`
    );
  });
});
