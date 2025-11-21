import StringTokenizer from '../domain/StringTokenizer.js';

describe('StringTokenizer', () => {
  let tokenizer;

  beforeEach(() => {
    tokenizer = new StringTokenizer();
  });

  test('쉼표와 콜론 혼용 구분자로 문자열 분리', () => {
    const tokens = tokenizer.tokenize('1,2:3', [',', ':']);
    expect(tokens).toEqual(['1', '2', '3']);
  });

  test('커스텀 구분자로 문자열 분리', () => {
    const tokens = tokenizer.tokenize('1;2;3', [';']);
    expect(tokens).toEqual(['1', '2', '3']);
  });

  test('연속된 구분자 처리', () => {
    const tokens = tokenizer.tokenize('1,,2', [',']);
    expect(tokens).toEqual(['1', '', '2']);
  });

  test('공백 포함 처리', () => {
    const tokens = tokenizer.tokenize('1, ,2', [',']);
    expect(tokens).toEqual(['1', ' ', '2']);
  });
});
