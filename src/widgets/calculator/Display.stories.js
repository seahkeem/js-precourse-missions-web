import Display from "./Display";

export default {
  title: "Calculator/Display",
  tags: ["autodocs"],

  render: (args) => {
    const container = document.createElement("div");

    container.innerHTML = Display.render();

    const displayValueEl = container.querySelector(".display-value");
    if (displayValueEl) {
      displayValueEl.textContent = args.value;

      if (args.isError) {
        displayValueEl.classList.add('error');
      }
    }

    container.style.maxWidth = '400px';

    return container;
  },

  parameters: {
    layout: "centered",
  },

  args: {
    value: "0",
    isError: false
  },
  argTypes: {
    value: { control: 'text', description: '표시할 숫자 또는 입력' },
    isError: { control: 'boolean', description: '오류 상태 표시 여부' },
  },
};

export const Initial = {
  args: {
    value: "0",
  },
};

export const MaxDigits = {
  args: {
    value: "1234567890",
  },
};

export const ErrorState = {
  args: {
    value: "ERROR",
    isError: true,
  },
};
