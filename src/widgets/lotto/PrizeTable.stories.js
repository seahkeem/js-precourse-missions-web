import PrizeTable from "./PrizeTable";

export default {
  title: "Lotto/PrizeTable",
  tags: ["autodocs"],

  render: () => {
    const container = document.createElement("div");

    const tableInstance = new PrizeTable();

    container.innerHTML = tableInstance.render();

    container.style.maxWidth = '600px';
    container.style.padding = '20px';

    return container;
  },

  parameters: {
    layout: "centered",
  },

  args: {},
  argTypes: {},
};

export const DefaultPrizeTable = {};
