import GameController from '../domain/GameController.js';
import Car from '../domain/Car.js';

// Mock the Car class to control its movement for predictable tests
jest.mock('../domain/Car.js');

describe('GameController', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    Car.mockClear();
  });

  it('should run the race for the specified number of rounds', () => {
    const cars = [new Car('pobi'), new Car('woni')];
    const tryCount = 5;
    const game = new GameController(cars, tryCount);

    game.startRace();

    // Each car's move method should be called 'tryCount' times
    expect(cars[0].move).toHaveBeenCalledTimes(tryCount);
    expect(cars[1].move).toHaveBeenCalledTimes(tryCount);
  });

  it('should correctly determine the single winner', () => {
    // Mock implementations for Car methods
    const pobi = new Car('pobi');
    pobi.getName.mockReturnValue('pobi');
    pobi.getPosition
      .mockReturnValueOnce(1) // round 1
      .mockReturnValueOnce(2) // round 2
      .mockReturnValue(3);    // round 3 and onwards

    const woni = new Car('woni');
    woni.getName.mockReturnValue('woni');
    woni.getPosition
      .mockReturnValueOnce(0) // round 1
      .mockReturnValueOnce(1) // round 2
      .mockReturnValue(1);    // round 3 and onwards

    const cars = [pobi, woni];
    const tryCount = 3;
    const game = new GameController(cars, tryCount);

    const { winners } = game.startRace();
    expect(winners).toEqual(['pobi']);
  });

  it('should correctly determine multiple winners (a tie)', () => {
    const pobi = new Car('pobi');
    pobi.getName.mockReturnValue('pobi');
    pobi.getPosition.mockReturnValue(3);

    const woni = new Car('woni');
    woni.getName.mockReturnValue('woni');
    woni.getPosition.mockReturnValue(3);

    const jun = new Car('jun');
    jun.getName.mockReturnValue('jun');
    jun.getPosition.mockReturnValue(2);

    const cars = [pobi, woni, jun];
    const tryCount = 3;
    const game = new GameController(cars, tryCount);

    const { winners } = game.startRace();
    expect(winners).toEqual(['pobi', 'woni']);
  });
});
