import CalculatorUI from "./CalculatorUI";

export default {
  title: "Calculator/CalculatorUI",
  tags: ["autodocs"],

  render: () => {
    const container = document.createElement("div");
    container.style.width = "360px";
    container.style.margin = "20px auto";

    const calculator = new CalculatorUI({
      mode: "basic",
      customDelimiter: "",
    });

    container.innerHTML = calculator.render();
    calculator.bindEvents(container, (key) => console.log('Storybook Key Input:', key));

    return container;
  },

  parameters: {
    layout: "centered",
  },

  args: {},
  argTypes: {},
};

export const Default = {};
