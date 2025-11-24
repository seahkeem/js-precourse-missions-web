import PrizeTable from './PrizeTable.js';

class LottoContainer {
  constructor() {
    this.prizeTable = new PrizeTable();

    this.bindEvents = this.bindEvents.bind(this);
  }

  bindEvents() {
  }

  render() {
    const renderBallButtons = (idPrefix) =>
      Array.from({ length: 45 }, (_, i) => {
        const number = i + 1;
        return `<button class="lotto-ball small" data-number="${number}" id="${idPrefix}-${number}">${number}</button>`;
      }).join("");

    return `
      <div class="lotto-app-container">
        
        ${this.prizeTable.render()} <div class="lotto-section purchase-section">
          <h3 class="lotto-subtitle">구입 금액을 입력해 주세요</h3>
          <div class="input-group">
            <input type="number" id="purchase-amount" placeholder="1,000원 단위 금액 입력" min="1000" max= "5000" step="1000">
            <button id="purchase-button">구매</button>
          </div>
          <p id="lotto-count-display"></p>
        </div>
        <div class="lotto-section winning-input-section hidden">
          <h3 class="lotto-subtitle">당첨 번호 6개를 선택해 주세요</h3>
          <div class="lotto-ball-grid winning-grid">
            ${renderBallButtons('winning')}
          </div>

          <h3 class="lotto-subtitle" style="margin-top: 20px;">보너스 번호 1개를 선택해 주세요</h3>
          <div class="lotto-ball-grid bonus-grid">
            ${renderBallButtons('bonus')}
          </div>
          
          <div class="input-group" style="margin-top: 20px; justify-content: flex-end;">
            <button id="result-button">결과 확인</button>
          </div>
        </div>

      </div>
    `;
  }
}

export default LottoContainer;
