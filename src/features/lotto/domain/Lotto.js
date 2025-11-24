import LottoValidator from "./LottoValidator.js";
import { LOTTO_RULES } from "../constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    const newNumbers = numbers || this.#generateRandomNumbers();
    this.#validate(newNumbers);
    this.#numbers = newNumbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    LottoValidator.validateLottoNumbers(numbers);
  }

  getNumbers() {
    return [...this.#numbers];
  }

  #generateRandomNumbers() {
    const { MIN_NUMBER, MAX_NUMBER, COUNT } = LOTTO_RULES;
    const allNumbers = Array.from(
      { length: MAX_NUMBER - MIN_NUMBER + 1 },
      (_, i) => i + MIN_NUMBER
    );

    const shuffled = allNumbers.sort(() => 0.5 - Math.random());

    return shuffled.slice(0, COUNT);
  }
}

export default Lotto;
