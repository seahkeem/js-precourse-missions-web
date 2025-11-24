import Car from '../domain/Car.js';

describe('Car', () => {
  it('should be created with a name and initial position of 0', () => {
    const car = new Car('pobi');
    expect(car.getName()).toBe('pobi');
    expect(car.getPosition()).toBe(0);
  });

  describe('move', () => {
    let randomSpy;

    beforeEach(() => {
      randomSpy = jest.spyOn(Math, 'random');
    });

    afterEach(() => {
      randomSpy.mockRestore();
    });

    it('should move forward if random number is 4 or greater', () => {
      const car = new Car('pobi');
      randomSpy.mockReturnValue(0.4);
      car.move();
      expect(car.getPosition()).toBe(1);
    });

    it('should not move if random number is less than 4', () => {
      const car = new Car('pobi');
      randomSpy.mockReturnValue(0.3);
      car.move();
      expect(car.getPosition()).toBe(0);
    });
  });
});
