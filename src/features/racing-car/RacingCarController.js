import Car from './domain/Car.js';
import GameController from './domain/GameController.js';
import RacingCarValidator from './domain/RacingCarValidator.js';

const RACE_ANIMATION_INTERVAL = 200;

class RacingCarController {
  #rootElement;
  #nameInputWidget;
  #tryCountInputWidget;
  #raceDisplayWidget;
  #winnerDisplayWidget;

  #carNames = [];
  #tryCount = 0;

  constructor({ root, nameInput, tryCountInput, raceDisplay, winnerDisplay }) {
    this.#rootElement = root;
    this.#nameInputWidget = nameInput;
    this.#tryCountInputWidget = tryCountInput;
    this.#raceDisplayWidget = raceDisplay;
    this.#winnerDisplayWidget = winnerDisplay;
  }

  init() {
    this.#bindEvents();
  }

  #bindEvents() {
    const carNamesSubmit = this.#rootElement.querySelector('#car-names-submit');
    const tryCountSubmit = this.#rootElement.querySelector('#try-count-submit');

    carNamesSubmit.addEventListener('click', this.#handleCarNamesSubmit.bind(this));
    tryCountSubmit.addEventListener('click', this.#handleTryCountSubmit.bind(this));
  }

  #handleCarNamesSubmit() {
    try {
      const carNamesInput = this.#rootElement.querySelector('#car-names-input');
      const names = carNamesInput.value.split(',').map(name => name.trim());
      RacingCarValidator.validateCarNames(names);
      this.#carNames = names;

      this.#rootElement.querySelector('#try-count-section').classList.remove('hidden');
    } catch (error) {
      // alert(error.message);
    }
  }

  #handleTryCountSubmit() {
    try {
      const tryCountInput = this.#rootElement.querySelector('#try-count-input');
      const count = Number(tryCountInput.value);
      RacingCarValidator.validateTryCount(count);
      this.#tryCount = count;

      this.#startRace();
    } catch (error) {
      // alert(error.message);
    }
  }

  #startRace() {
    const cars = this.#carNames.map(name => new Car(name));
    const game = new GameController(cars, this.#tryCount);
    const { raceResults, winners } = game.startRace();

    const raceDisplaySection = this.#rootElement.querySelector('#race-display-section');
    raceDisplaySection.outerHTML = this.#raceDisplayWidget.render(this.#carNames);

    this.#animateRace(raceResults, winners);
  }

  #animateRace(raceResults, winners) {
    raceResults.forEach((roundData, i) => {
      setTimeout(() => {
        roundData.forEach(carData => {
          const progressBar = this.#rootElement.querySelector(
            `.rc-car-progress[data-car-name="${carData.name}"] .rc-progress-bar`
          );
          if (progressBar) {
            progressBar.textContent = ' ⚫️'.repeat(carData.position);
          }
        });
      }, (i + 1) * RACE_ANIMATION_INTERVAL);
    });

    setTimeout(() => {
      this.#updateWinnerDisplay(winners);
    }, raceResults.length * RACE_ANIMATION_INTERVAL);
  }

  #updateWinnerDisplay(winners) {
    const winnerDisplaySection = this.#rootElement.querySelector('#winner-display-section');
    winnerDisplaySection.outerHTML = this.#winnerDisplayWidget.render(winners);
  }
}

export default RacingCarController;
