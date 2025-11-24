import { OUTPUT_MESSAGES } from '../../features/racing-car/constants.js';

class RaceDisplay {
  render(carNames = []) {
    if (carNames.length === 0) {
      return '<div id="race-display-section" class="rc-display-section hidden"></div>';
    }

    const carsHtml = carNames.map(name => `
      <div class="rc-car-progress" data-car-name="${name}">
        <span class="rc-car-name-box">${name}</span><span> </span>
        <span class="rc-progress-bar"></span>
      </div>
    `).join('');

    return `
      <div id="race-display-section" class="rc-display-section">
        <h3 class="rc-race-subtitle">${OUTPUT_MESSAGES.EXECUTION_RESULT}</h3>
        <div id="rc-live-race">
          ${carsHtml}
        </div>
      </div>
    `;
  }
}

export default RaceDisplay;
