import RacingCarValidator from '../domain/RacingCarValidator.js';
import { COMMON_MESSAGES } from '@/shared/constants/messages.constants.js';
import { ERROR_MESSAGES } from '../constants.js';

describe('RacingCarValidator', () => {
  describe('validateCarNames', () => {
    it('should not throw an error for valid car names', () => {
      expect(() => RacingCarValidator.validateCarNames(['pobi', 'woni', 'jun'])).not.toThrow();
    });

    it('should throw an error if any car name is longer than 5 characters', () => {
      const expectedError = new Error(`${COMMON_MESSAGES.ERROR_PREFIX}${ERROR_MESSAGES.NAME_LENGTH}`);
      expect(() => RacingCarValidator.validateCarNames(['pobi', 'crong', 'honux'])).not.toThrow();
      expect(() => RacingCarValidator.validateCarNames(['pobi', 'javaji', 'woni'])).toThrow(expectedError);
    });

    it('should throw an error for an empty or invalid list of names', () => {
      const expectedError = new Error(`${COMMON_MESSAGES.ERROR_PREFIX}${ERROR_MESSAGES.NAME_INVALID}`);
      expect(() => RacingCarValidator.validateCarNames([])).toThrow(expectedError);
      expect(() => RacingCarValidator.validateCarNames(null)).toThrow(expectedError);
      expect(() => RacingCarValidator.validateCarNames(undefined)).toThrow(expectedError);
    });
  });

  describe('validateTryCount', () => {
    it('should not throw an error for a positive integer', () => {
      expect(() => RacingCarValidator.validateTryCount(5)).not.toThrow();
    });

    it('should throw an error for zero', () => {
      const expectedError = new Error(`${COMMON_MESSAGES.ERROR_PREFIX}${ERROR_MESSAGES.COUNT_INVALID}`);
      expect(() => RacingCarValidator.validateTryCount(0)).toThrow(expectedError);
    });

    it('should throw an error for a negative number', () => {
      const expectedError = new Error(`${COMMON_MESSAGES.ERROR_PREFIX}${ERROR_MESSAGES.COUNT_INVALID}`);
      expect(() => RacingCarValidator.validateTryCount(-1)).toThrow(expectedError);
    });

    it('should throw an error for a non-integer', () => {
      const expectedError = new Error(`${COMMON_MESSAGES.ERROR_PREFIX}${ERROR_MESSAGES.COUNT_INVALID}`);
      expect(() => RacingCarValidator.validateTryCount(1.5)).toThrow(expectedError);
      expect(() => RacingCarValidator.validateTryCount('a')).toThrow(expectedError);
    });
  });
});
