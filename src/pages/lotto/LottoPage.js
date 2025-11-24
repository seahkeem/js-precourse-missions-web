import './lotto.css';
import { LottoContainer } from '@/widgets/lotto';

class LottoPage {
  constructor(rootElement) {
    this.root = rootElement;
  }

  render() {
    const lottoContainer = new LottoContainer();
    const lottoContainerHtml = lottoContainer.render();

    this.root.innerHTML = `
      <section class="lotto-page">
        <h2>로또 발매기</h2>
        <div class="lotto-area-root">
          ${lottoContainerHtml} 
        </div>
      </section>
    `;
  }

  bindEvents() {
  }
}

export default LottoPage;
