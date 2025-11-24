import { INPUT_MESSAGES } from '../../features/racing-car/constants.js';

class NameInput {
  render() {
    return `
      <div class="rc-section">
        <label for="car-names-input" class="rc-subtitle">${INPUT_MESSAGES.CAR_NAMES}</label>
        <div class="input-group">
          <input type="text" id="car-names-input" class="rc-input" placeholder="pobi,woni,jun" />
          <button id="car-names-submit" class="rc-button">확인</button>
        </div>
      </div>
    `;
  }
}

export default NameInput;
