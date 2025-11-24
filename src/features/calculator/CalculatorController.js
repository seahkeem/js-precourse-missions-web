import Calculator from './domain/Calculator.js';
import StringParser from './domain/StringParser.js';

import {
  DEFAULT_DELIMITERS,
  MAX_INPUT_LENGTH,
} from './constants.js';

class CalculatorController {
  #inputString = '';
  #mode = 'basic';
  #customDelimiter = '';
  #delimiters = DEFAULT_DELIMITERS;

  #rootElement;
  #calculatorUI;
  #delimiterSelector;
  #displayElement;

  #calculator = new Calculator();
  #stringParser = new StringParser();

  constructor({ rootElement, calculatorUI, delimiterSelector }) {
    this.#rootElement = rootElement;
    this.#calculatorUI = calculatorUI;
    this.#delimiterSelector = delimiterSelector;

    this.handleKeyInput = this.handleKeyInput.bind(this);
    this.handleDelimiterChange = this.handleDelimiterChange.bind(this);
  }

  init() {
    this.#displayElement = this.#rootElement.querySelector('.display-value');

    this.#calculatorUI.bindEvents(this.#rootElement, this.handleKeyInput);
    this.#delimiterSelector.bindEvents(this.#rootElement, this.handleDelimiterChange);

    this.updateDisplay();
  }

  #isInputLengthExceeded(newValue) {
    const numericLength = newValue.replace(/[^0-9]/g, '').length;
    return numericLength > MAX_INPUT_LENGTH;
  }

  #isConsecutiveDelimiter(value) {
    const lastChar = this.#inputString.slice(-1);

    const allDelimiters = [...DEFAULT_DELIMITERS, this.#customDelimiter].filter(d => d);

    const isValueDelimiter = allDelimiters.includes(value);
    const isLastCharDelimiter = allDelimiters.includes(lastChar);

    return isValueDelimiter && isLastCharDelimiter;
  }

  handleDelimiterChange(data) {
    this.#mode = data.mode;
    this.#customDelimiter = data.customDelimiter;

    this.#calculatorUI.updateDelimiter(data);

    this.#delimiters = this.#mode === 'basic' ? DEFAULT_DELIMITERS : [this.#customDelimiter];

    this.resetInput();
  }

  handleKeyInput(value) {
    try {
      if (value === 'calculate') {
        this.runCalculation();
      } else if (value === 'C') {
        this.resetInput();
      } else if (value === 'CE') {
        this.clearEntry();
      } else {
        this.#appendInput(value);
      }
    } catch (error) {
      this.updateDisplay(error.message, true);
    }
  }

  #appendInput(value) {
    if (this.#isConsecutiveDelimiter(value)) return;

    const tempInput = this.#inputString + value;
    if (this.#isInputLengthExceeded(tempInput)) return;

    this.#inputString = tempInput;
    this.updateDisplay();
  }

  #performCalculation() {
    const tokens = this.#stringParser.parse(this.#inputString, this.#delimiters);
    const numbers = this.#calculator.validateAndParseNumbers(tokens);
    return this.#calculator.sum(numbers);
  }

  #handleCalculationSuccess(result) {
    this.updateDisplay(result.toString());
    this.resetInput(result.toString());
  }

  #handleCalculationError(error) {
    this.updateDisplay(error.message, true);
    this.resetInput();
  }

  runCalculation() {
    if (!this.#inputString) {
      this.updateDisplay('0');
      return;
    }

    try {
      const result = this.#performCalculation();
      this.#handleCalculationSuccess(result);
    } catch (error) {
      this.#handleCalculationError(error);
    }
  }

  resetInput(initialValue = '0') {
    this.#inputString = '';
    this.updateDisplay(initialValue);
  }

  clearEntry() {
    this.#inputString = this.#inputString.slice(0, -1);
    this.updateDisplay(this.#inputString);
  }

  updateDisplay(content = this.#inputString, isError = false) {
    if (this.#displayElement) {
      this.#displayElement.textContent = content || '0';
      this.#displayElement.classList.toggle('error', isError);
    }
  }
}

export default CalculatorController;
