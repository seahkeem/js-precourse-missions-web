import WinningNumbersInput from "./WinningNumbersInput";

export default {
  title: "Lotto/WinningNumbersInput",
  tags: ["autodocs"],

  render: () => {
    const container = document.createElement("div");
    const instance = new WinningNumbersInput();
    container.innerHTML = instance.render();

    const balls = container.querySelectorAll('.lotto-ball');
    balls.forEach(ball => {
      ball.addEventListener('click', () => {
        ball.classList.toggle('selected');
      });
    });

    const winningSection = container.querySelector('.winning-input-section');
    if (winningSection) {
      winningSection.classList.remove('hidden');
    }

    container.style.width = '600px';
    container.style.padding = '20px';
    return container;
  },

  parameters: {
    layout: "centered",
  },
};

export const Default = {
};
