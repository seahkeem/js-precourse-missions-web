import Keypad from "./Keypad";
import Display from "./Display";

class CalculatorUI {
  #handler;

  constructor({ mode = "basic", customDelimiter = "" } = {}) {
    this.mode = mode;
    this.customDelimiter = customDelimiter;
  }

  render() {
    const staticDisplay = Display.render();
    const staticKeypad = Keypad.render(this.mode, this.customDelimiter);

    return `
      <div class="calculator-box">
        ${staticDisplay}
        <div class="keypad-area">
          ${staticKeypad}
        </div>
      </div>
    `;
  }

  updateDelimiter({ mode, customDelimiter }) {
    this.mode = mode;
    this.customDelimiter = customDelimiter;

    const keypadRoot = document.querySelector(".keypad-area");

    const updatedKeypadHtml = Keypad.render(this.mode, this.customDelimiter);
    if (keypadRoot) {
      keypadRoot.innerHTML = updatedKeypadHtml;
      if (this.#handler) {
        Keypad.bindEvents(keypadRoot, this.#handler);
      }
    }
  }

  bindEvents(rootElement, handler) {
    this.#handler = handler;
    const keypadRoot = rootElement.querySelector(".keypad-area");

    if (keypadRoot) {
      Keypad.bindEvents(keypadRoot, this.#handler);
    }
  }
}
export default CalculatorUI;
