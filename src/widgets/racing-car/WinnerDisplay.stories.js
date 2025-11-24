import WinnerDisplay from './WinnerDisplay';

export default {
  title: 'RacingCar/WinnerDisplay',
  component: WinnerDisplay,
  tags: ['autodocs'],
};

const Template = (args) => {
  const component = new WinnerDisplay();
  const element = document.createElement('div');
  element.innerHTML = component.render(args.winners);
  if (args.winners && args.winners.length > 0) {
    element.firstElementChild.classList.remove('hidden');
  }
  return element;
};

export const Default = Template.bind({});
Default.args = {
  winners: [],
};

export const SingleWinner = Template.bind({});
SingleWinner.args = {
  winners: ['pobi'],
};

export const MultipleWinners = Template.bind({});
MultipleWinners.args = {
  winners: ['pobi', 'woni'],
};
