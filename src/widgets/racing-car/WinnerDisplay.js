import { OUTPUT_MESSAGES } from '../../features/racing-car/constants.js';

class WinnerDisplay {
  render(winners = []) {
    if (winners.length === 0) {
      return '<div id="winner-display-section" class="rc-display-section hidden"></div>';
    }

    const winnersText = winners.join(', ');

    return `
      <div id="winner-display-section" class="rc-display-section">
        <h3 class="rc-race-subtitle">${OUTPUT_MESSAGES.FINAL_WINNER}${winnersText}</h3>
      </div>
    `;
  }
}

export default WinnerDisplay;
