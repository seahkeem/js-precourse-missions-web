import DelimiterSelector from "./DelimiterSelector";

export default {
  title: "Calculator/DelimiterSelector",
  tags: ["autodocs"],

  render: () => {
    const container = document.createElement("div");

    const selector = new DelimiterSelector((data) => {
      console.log("Delimiter changed:", data);
    });

    container.innerHTML = selector.render();

    return container;
  },

  parameters: {
    layout: "centered",
  },

  args: {},
  argTypes: {},
};

export const Default = {};
