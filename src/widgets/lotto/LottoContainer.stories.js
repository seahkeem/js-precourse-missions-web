import LottoContainer from "./LottoContainer";

export default {
  title: "Lotto/LottoContainer",
  tags: ["autodocs"],

  render: () => {
    const container = document.createElement("div");

    const containerInstance = new LottoContainer();

    container.innerHTML = containerInstance.render();

    container.style.width = '100%';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.minHeight = '100vh';

    return container;
  },

  parameters: {
    layout: "padded",
  },

  args: {},
  argTypes: {},
};

export const Default = {};

export const WithWinningInputVisible = {
  render: () => {
    const container = document.createElement("div");
    const containerInstance = new LottoContainer();
    container.innerHTML = containerInstance.render();

    const winningSection = container.querySelector('.winning-input-section');
    if (winningSection) {
      winningSection.classList.remove('hidden');
    }

    container.style.width = '100%';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.minHeight = '100vh';

    return container;
  },
  name: 'Select number',
};
