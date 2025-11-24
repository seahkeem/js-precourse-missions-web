import PrizeTable from "./PrizeTable";

export default {
  title: "Lotto/PrizeTable",
  tags: ["autodocs"],

  render: (args) => {
    const container = document.createElement("div");
    const tableInstance = new PrizeTable();
    container.innerHTML = tableInstance.render(args);
    container.style.maxWidth = '600px';
    container.style.padding = '20px';

    return container;
  },

  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    result: null,
    profitRate: null,
  },
};

export const WithResults = {
  args: {
    result: {
      1: 0,
      2: 0,
      3: 0,
      4: 1,
      5: 2,
    },
    profitRate: 550,
  },
};
