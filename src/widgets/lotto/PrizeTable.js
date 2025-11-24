import { LOTTO_RULES } from '@/features/lotto';

class PrizeTable {
  #result = null;
  #profitRate = null;

  bindEvents(rootElement, onRestart) {
    const restartButton = rootElement.querySelector('#restart-button');
    if (restartButton) {
      restartButton.addEventListener('click', onRestart);
    }
  }

  render({ result, profitRate }) {
    this.#result = result;
    this.#profitRate = profitRate;

    if (!this.#result) {
      return '<div class="lotto-prize-area hidden"></div>';
    }

    const resultRows = LOTTO_RULES.RANK_ORDER.map(rankKey => {
      const prizeInfo = LOTTO_RULES.WINNING_PRIZES[rankKey];
      const count = this.#result[rankKey] || 0;
      return `
        <tr>
          <td>${prizeInfo.match}개${prizeInfo.bonus ? ' + 보너스볼' : ''}</td>
          <td>${prizeInfo.prize.toLocaleString()}원</td>
          <td data-rank="${rankKey}">${count}개</td>
        </tr>
      `;
    }).join('');

    return `
      <div class="lotto-prize-area">
        <h3 class="lotto-subtitle">당첨 결과</h3>
        <table class="prize-table">
          <thead>
            <tr>
              <th>일치 갯수</th>
              <th>당첨금</th>
              <th>당첨 갯수</th>
            </tr>
          </thead>
          <tbody>
            ${resultRows}
          </tbody>
        </table>
        <p class="profit-rate-display">
          총 수익률은 ${this.#profitRate?.toFixed(2) ?? 0}% 입니다.
        </p>
        <div class="input-group" style="margin-top: 20px; justify-content: center;">
          <button id="restart-button">다시 시작하기</button>
        </div>
      </div>
    `;
  }
}

export default PrizeTable;
