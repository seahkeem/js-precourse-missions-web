import { CALCULATOR_MESSAGES } from '@/features/calculator';

class DelimiterSelector {
  #onChange;

  constructor() {
    this.mode = "basic";
    this.customDelimiter = "";
  }

  render() {
    return `
      <div class="delimiter-area">
        <div class="delimiter-options">
          <label>
            <input type="radio" name="delimiter-mode" value="basic" checked />
            기본 구분자
          </label>

          <label>
            <input type="radio" name="delimiter-mode" value="custom" />
            커스텀 구분자
          </label>
        </div>

        <div class="delimiter-custom-box hidden">
          <input 
            type="text" 
            class="delimiter-input"
            maxlength="1"
            placeholder="구분자 입력"
          />
          <button class="delimiter-confirm-btn">확인</button>
          <span class="delimiter-error-message"></span>
        </div>
      </div>
    `;
  }

  #validateCustomDelimiter(delimiter) {
    const isLengthOne = delimiter.length === 1;
    const isNotSpace = delimiter !== ' ';
    const isNotNumber = Number.isNaN(Number(delimiter));
    const isNotDecimal = delimiter !== '.';

    if (!(isLengthOne && isNotSpace && isNotNumber && isNotDecimal)) {
      throw new Error(
        `${CALCULATOR_MESSAGES.ERROR_INVALID_DELIMITER}`
      );
    }
  }

  bindEvents(root, handler) {
    this.#onChange = handler;
    const delimiterArea = root.querySelector(".delimiter-area");

    if (!delimiterArea) {
      console.error("Delimiter area not found for event binding.");
      return;
    }

    const radios = delimiterArea.querySelectorAll("input[name='delimiter-mode']");
    const customBox = delimiterArea.querySelector(".delimiter-custom-box");
    const input = delimiterArea.querySelector(".delimiter-input");
    const btn = delimiterArea.querySelector(".delimiter-confirm-btn");
    const errorMessageEl = delimiterArea.querySelector(".delimiter-error-message");

    const displayError = (message) => {
      errorMessageEl.textContent = message;
      errorMessageEl.classList.add('active-error');
    };
    const clearError = () => {
      errorMessageEl.textContent = '';
      errorMessageEl.classList.remove('active-error');
    };

    radios.forEach((radio) => {
      radio.addEventListener("change", () => {
        this.mode = radio.value;

        if (this.mode === "custom") {
          customBox.classList.remove("hidden");
        } else {
          customBox.classList.add("hidden");
          this.#onChange({ mode: "basic", customDelimiter: "" });
          input.value = "";
        }
      });
    });

    btn.addEventListener("click", () => {
      clearError();
      const newDelimiter = input.value.trim();

      try {
        if (this.mode === 'custom' && !newDelimiter) {
          throw new Error(`커스텀 구분자를 입력해 주세요.`);
        }

        this.#validateCustomDelimiter(newDelimiter);
        this.customDelimiter = newDelimiter;
        this.#onChange({
          mode: this.mode,
          customDelimiter: this.customDelimiter,
        });
      } catch (error) {
        displayError(error.message);
      }
    });
  }
}

export default DelimiterSelector;
