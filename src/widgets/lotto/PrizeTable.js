import { LOTTO_RULES } from '@/features/lotto';

class PrizeTable {
  render() {
    const prizes = LOTTO_RULES.WINNING_PRIZES;

    const tableRows = LOTTO_RULES.RANK_ORDER.map(rankKey => {
      const prizeInfo = prizes[rankKey];

      const rankText = `${rankKey}등`;

      let matchText = `${prizeInfo.match}개`;
      if (prizeInfo.bonus) {
        matchText += ' + 보너스';
      }

      const prizeText = `${prizeInfo.prize.toLocaleString()}원`;

      return `
        <tr>
          <td>${rankText}</td>
          <td>${matchText}</td>
          <td>${prizeText}</td>
        </tr>
      `;
    }).join('');

    return `
      <div class="lotto-prize-area">
        <h3 class="lotto-subtitle">💰 로또 당첨 기준</h3>
        <table class="prize-table">
          <thead>
            <tr><th>순위</th><th>일치 개수</th><th>상금</th></tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
      </div>
    `;
  }
}

export default PrizeTable;
