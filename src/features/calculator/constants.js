export const CALCULATOR_MESSAGES = Object.freeze({
  INPUT_PROMPT: '덧셈할 문자열을 입력해 주세요.\n',
  ERROR_INCOMPLETE_DECLARATION: '커스텀 구분자 선언이 불완전합니다.',
  ERROR_INVALID_DELIMITER: '유효하지 않은 커스텀 구분자입니다.',
});

export const DEFAULT_DELIMITERS = [',', ':'];
export const CUSTOM_DELIMITER_PREFIX = '//';
export const CUSTOM_DELIMITER_SUFFIX = '\n';

export const MAX_INPUT_LENGTH = 10;

export const KEYPAD_LAYOUT = [
  ['7', '8', '9', 'C'],
  ['4', '5', '6', 'CE'],
  ['1', '2', '3', 'ENTER'],
];

export const BASIC_LAST_ROW = ['0', '.', ',', ':'];
export const CUSTOM_LAST_ROW_STUB = ['0', '.', 'DELIM', ''];

export const CALCULATION_ACTION_KEY = 'calculate';
export const ENTER_KEY_TEXT = '↲';
