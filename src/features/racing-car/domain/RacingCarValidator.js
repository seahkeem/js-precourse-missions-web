import { CAR_CONSTANTS, ERROR_MESSAGES } from '../constants.js';
import { COMMON_MESSAGES } from '@/shared/constants/messages.constants.js';

const RacingCarValidator = {
  validateCarNames(names) {
    if (!names || names.length === 0) {
      throw new Error(`${COMMON_MESSAGES.ERROR_PREFIX}${ERROR_MESSAGES.NAME_INVALID}`);
    }

    if (names.some(name => name.length > CAR_CONSTANTS.MAX_NAME_LENGTH)) {
      throw new Error(`${COMMON_MESSAGES.ERROR_PREFIX}${ERROR_MESSAGES.NAME_LENGTH}`);
    }
  },

  validateTryCount(count) {
    if (!Number.isInteger(count) || count <= 0) {
      throw new Error(`${COMMON_MESSAGES.ERROR_PREFIX}${ERROR_MESSAGES.COUNT_INVALID}`);
    }
    if (count > CAR_CONSTANTS.MAX_TRY_COUNT) {
      throw new Error(`${COMMON_MESSAGES.ERROR_PREFIX}${ERROR_MESSAGES.COUNT_MAX}`);
    }
  },
};

export default RacingCarValidator;
