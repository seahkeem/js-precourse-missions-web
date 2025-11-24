import './lotto.css';
import { LottoController } from '@/features/lotto';
import { LottoContainer, WinningNumbersInput, PrizeTable } from '@/widgets/lotto';

class LottoPage {
  constructor(rootElement) {
    this.root = rootElement;

    this.lottoContainer = new LottoContainer();
    this.winningNumbersInput = new WinningNumbersInput();
    this.prizeTable = new PrizeTable();

    this.controller = new LottoController({
      rootElement: this.root,
      lottoContainer: this.lottoContainer,
      winningNumbersInput: this.winningNumbersInput,
      prizeTable: this.prizeTable,
    });
  }

  render() {
    const lottoContainerHtml = this.lottoContainer.render();
    const winningNumbersInputHtml = this.winningNumbersInput.render();
    const prizeTableHtml = this.prizeTable.render({ result: null, profitRate: null });

    this.root.innerHTML = `
      <section class="lotto-page">
        <h2 class="text-center">로또 발매기</h2>
        <div class="lotto-area-root">
          <div class="lotto-input-area">
            ${lottoContainerHtml}
            ${winningNumbersInputHtml}
          </div>
          <div class="lotto-result-area">
            ${prizeTableHtml}
          </div>
        </div>
      </section>
    `;
  }

  bindEvents() {
    this.controller.init();
  }
}

export default LottoPage;
