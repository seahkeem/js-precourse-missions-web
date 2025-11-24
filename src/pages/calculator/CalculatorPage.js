import './calculator.css';
import { DelimiterSelector, CalculatorUI } from '@/widgets/calculator';
import { CalculatorController } from '@/features/calculator';

class CalculatorPage {
  constructor(rootElement) {
    this.root = rootElement;

    this.calculatorUI = new CalculatorUI();
    this.delimiterSelector = new DelimiterSelector();

    this.controller = new CalculatorController({
      rootElement: this.root,
      calculatorUI: this.calculatorUI,
      delimiterSelector: this.delimiterSelector,
    });
  }

  bindEvents() {
    this.controller.init();
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
