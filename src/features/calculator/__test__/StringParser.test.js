import StringParser from '../domain/StringParser.js';

describe('StringParser (Web Optimized)', () => {
  let parser;

  beforeEach(() => {
    parser = new StringParser();
  });

  test('기본 구분자로 문자열을 토큰 배열로 분리', () => {
    const tokens = parser.parse('1,2:3', [',', ':']);
    expect(tokens).toEqual(['1', '2', '3']);
  });

  test('커스텀 구분자로 문자열을 토큰 배열로 분리', () => {
    const tokens = parser.parse('1;2;3', [';']);
    expect(tokens).toEqual(['1', '2', '3']);
  });

  test('입력이 비어있으면 [\'0\']을 반환', () => {
    const tokens = parser.parse('', [',', ':']);
    expect(tokens).toEqual(['0']);
  });

  test('연속된 구분자 처리', () => {
    const tokens = parser.parse('1,,2', [',']);
    expect(tokens).toEqual(['1', '', '2']);
  });

});
