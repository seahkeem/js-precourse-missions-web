import { INPUT_MESSAGES, CAR_CONSTANTS } from '../../features/racing-car/constants.js';

class TryCountInput {
  render() {
    return `
      <div id="try-count-section" class="rc-section hidden">
        <label for="try-count-input" class="rc-subtitle">${INPUT_MESSAGES.TRY_COUNT}</label>
        <div class="input-group">
          <input 
            type="number" 
            id="try-count-input" 
            class="rc-input" 
            placeholder="최대 ${CAR_CONSTANTS.MAX_TRY_COUNT}회" 
            min="1" 
            max="${CAR_CONSTANTS.MAX_TRY_COUNT}" 
          />
          <button id="try-count-submit" class="rc-button">확인</button>
        </div>
      </div>
    `;
  }
}

export default TryCountInput;
