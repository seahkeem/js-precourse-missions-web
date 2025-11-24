import DelimiterSelector from "./DelimiterSelector";

export default {
  title: "Calculator/DelimiterSelector",
  tags: ["autodocs"],

  render: () => {
    const container = document.createElement("div");

    const selector = new DelimiterSelector();

    container.innerHTML = selector.render();

    selector.bindEvents(container, (data) => {
      console.log("Delimiter changed:", data);
    });

    return container;
  },

  parameters: {
    layout: "centered",
  },

  args: {},
  argTypes: {},
};

export const Default = {};
