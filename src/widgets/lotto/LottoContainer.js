import { getBallColor } from '@/features/lotto';

class LottoContainer {
  #lottos = [];

  renderPurchaseForm() {
    return `
      <div class="lotto-section purchase-section">
        <h3 class="lotto-subtitle">구입 금액을 입력해 주세요</h3>
        <div class="input-group">
          <input type="number" id="purchase-amount" placeholder="1,000원 단위 금액 입력" min="1000" step="1000">
        </div>
      </div>
    `;
  }

  renderPurchasedLottos(lottos) {
    return `
      <div class="lotto-section purchased-lottos-section">
        <h3 class="lotto-subtitle">구매한 로또</h3>
        <p class="lotto-count-display">총 ${lottos.length}개를 구매하였습니다.</p>
        <ul class="lotto-ticket-list">
          ${lottos.map(lotto => `
            <li class="lotto-ticket">
              <div class="lotto-numbers">
                ${lotto.getNumbers().map(number => `
                  <span 
                    class="lotto-ball small"
                    style="background-color: ${getBallColor(number)};"
                  >
                    ${number}
                  </span>
                `).join('')}
              </div>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  render() {
    return `
      <div class="lotto-container">
        ${this.renderPurchaseForm()}
      </div>
    `;
  }
}

export default LottoContainer;
