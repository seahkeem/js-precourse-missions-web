import TryCountInput from './TryCountInput';

export default {
  title: 'RacingCar/TryCountInput',
  component: TryCountInput,
  tags: ['autodocs'],
};

const Template = (args) => {
  const component = new TryCountInput();
  const element = document.createElement('div');
  element.innerHTML = component.render();
  if (args.visible) {
    element.firstElementChild.classList.remove('hidden');
  }
  return element;
};

export const Default = Template.bind({});
Default.args = {
  visible: false,
};

export const Visible = Template.bind({});
Visible.args = {
  visible: true,
};
