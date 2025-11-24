import './racing-car.css';
import { NameInput, TryCountInput, RaceDisplay, WinnerDisplay } from '../../widgets/racing-car/index.js';
import RacingCarController from '../../features/racing-car/RacingCarController.js';

class RacingCarPage {
  constructor(rootElement) {
    this.root = rootElement;
    this.nameInput = new NameInput();
    this.tryCountInput = new TryCountInput();
    this.raceDisplay = new RaceDisplay();
    this.winnerDisplay = new WinnerDisplay();

    this.controller = new RacingCarController({
      root: this.root,
      nameInput: this.nameInput,
      tryCountInput: this.tryCountInput,
      raceDisplay: this.raceDisplay,
      winnerDisplay: this.winnerDisplay,
    });
  }

  render() {
    this.root.innerHTML = `
      <div class="racing-car-page">
        <h2 class="page-title">자동차 경주</h2>
        <div class="app-container">
          ${this.nameInput.render()}
          ${this.tryCountInput.render()}
        </div>
        <div class="app-container">
          ${this.raceDisplay.render()}
          ${this.winnerDisplay.render()}
        </div>
      </div>
    `;
  }

  bindEvents() {
    this.controller.init();
  }
}

export default RacingCarPage;
