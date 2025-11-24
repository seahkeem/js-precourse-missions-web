import { CAR_CONSTANTS } from "../constants.js";

const { MIN_RANDOM_VALUE, MAX_RANDOM_VALUE, MOVING_CRITERIA } = CAR_CONSTANTS;

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move() {
    const randomNumber = Math.floor(Math.random() * (MAX_RANDOM_VALUE - MIN_RANDOM_VALUE + 1)) + MIN_RANDOM_VALUE;

    if (randomNumber >= MOVING_CRITERIA) {
      this.#position += 1;
    }
  }

  getPosition() {
    return this.#position;
  }

  getName() {
    return this.#name;
  }
}

export default Car;
