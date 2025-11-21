import { COMMON_MESSAGES } from '@/shared/constants/messages.constants.js';

class Calculator {
  validateNumber(token) {
    if (token.trim() === '') return 0;
    const number = Number(token);
    if (Number.isNaN(number)) {
      throw new Error(`${COMMON_MESSAGES.ERROR_PREFIX}${COMMON_MESSAGES.ERROR_INVALID_NUMBER}'${token}'`);
    }
    if (number < 0) {
      throw new Error(`${COMMON_MESSAGES.ERROR_PREFIX}${COMMON_MESSAGES.ERROR_NEGATIVE_NUMBER}'${token}'`);
    }
    return number;
  }

  validateAndParseNumbers(tokens) {
    return tokens.map(this.validateNumber);
  }

  sum(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
  }
}

export default Calculator;
