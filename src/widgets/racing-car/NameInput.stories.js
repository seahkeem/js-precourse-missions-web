import NameInput from './NameInput';

export default {
  title: 'RacingCar/NameInput',
  component: NameInput,
  tags: ['autodocs'],
  render: () => {
    const component = new NameInput();
    const element = document.createElement('div');
    element.innerHTML = component.render();
    return element;
  },
};

export const Default = {};
