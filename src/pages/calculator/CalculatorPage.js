import './calculator.css';
import { DelimiterSelector, CalculatorUI } from '@/widgets/calculator';

class CalculatorPage {
  constructor(rootElement) {
    this.root = rootElement;
    this.delimiterSelector = new DelimiterSelector({});
    this.calculatorUI = new CalculatorUI({});
  }

  bindEvents() {
  }

  render() {
    const delimiterSelectorHtml = this.delimiterSelector.render();
    const calculatorUIHtml = this.calculatorUI.render();

    this.root.innerHTML = `
      <section class="calculator-page">
        <h2>문자열 덧셈기</h2>
        <div class="calculator-area-root">
          ${delimiterSelectorHtml}
          ${calculatorUIHtml} 
        </div>
      </section>
    `;
  }
};

export default CalculatorPage;
