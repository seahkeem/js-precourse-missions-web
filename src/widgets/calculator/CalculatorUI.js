import Keypad from "./Keypad";
import Display from "./Display";

class CalculatorUI {
  constructor({ mode = "basic", customDelimiter = "" }) {
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
}

export default CalculatorUI;
