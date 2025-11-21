import { COMMON_MESSAGES } from '@/shared/constants/messages.constants.js';
import {
  DEFAULT_DELIMITERS,
  CUSTOM_DELIMITER_PREFIX,
  CUSTOM_DELIMITER_SUFFIX
} from '../../constants';

class StringParser {

  parse(inputString) {
    if (inputString.startsWith(CUSTOM_DELIMITER_PREFIX)) {
      return this.#parseCustomDelimiter(inputString);
    }

    return {
      delimiters: DEFAULT_DELIMITERS,
      numbersString: inputString,
    };
  }

  #parseCustomDelimiter(inputString) {
    const newlineIndex = this.#findNewlineIndex(inputString);
    const delimiter = this.#extractDelimiter(inputString, newlineIndex);
    const numbersString = this.#extractNumbersString(inputString, newlineIndex);

    this.#validateCustomDelimiter(delimiter);

    return { delimiters: [delimiter], numbersString };
  }

  #findNewlineIndex(inputString) {
    const index = inputString.indexOf(CUSTOM_DELIMITER_SUFFIX);
    if (index === -1) {
      throw new Error(
        `${COMMON_MESSAGES.ERROR_PREFIX}${COMMON_MESSAGES.ERROR_INCOMPLETE_DECLARATION}`
      );
    }
    return index;
  }

  #extractDelimiter(inputString, newlineIndex) {
    return inputString.substring(
      CUSTOM_DELIMITER_PREFIX.length,
      newlineIndex
    );
  }

  #extractNumbersString(inputString, newlineIndex) {
    return inputString.substring(
      newlineIndex + CUSTOM_DELIMITER_SUFFIX.length
    );
  }

  #validateCustomDelimiter(delimiter) {
    const isLengthOne = delimiter.length === 1;
    const isNotSpace = delimiter !== ' ';
    const isNotNumber = Number.isNaN(Number(delimiter));
    const isNotDecimal = delimiter !== '.';

    if (!(isLengthOne && isNotSpace && isNotNumber && isNotDecimal)) {
      throw new Error(
        `${COMMON_MESSAGES.ERROR_PREFIX}${COMMON_MESSAGES.ERROR_INVALID_DELIMITER}`
      );
    }
  }
}

export default StringParser;
