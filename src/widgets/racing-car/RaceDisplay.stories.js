import RaceDisplay from './RaceDisplay';

export default {
  title: 'RacingCar/RaceDisplay',
  component: RaceDisplay,
  tags: ['autodocs'],
};

const Template = (args) => {
  const component = new RaceDisplay();
  const element = document.createElement('div');
  element.innerHTML = component.render(args.carNames);
  if (args.carNames && args.carNames.length > 0) {
    element.firstElementChild.classList.remove('hidden');
  }
  return element;
};

export const Default = Template.bind({});
Default.args = {
  carNames: [],
};

export const WithCars = Template.bind({});
WithCars.args = {
  carNames: ['pobi', 'woni', 'jun'],
};
