import CalculatorPage from "./CalculatorPage";

export default {
  title: "Pages/CalculatorPage",
  tags: ["autodocs"],

  render: () => {

    const rootContainer = document.createElement("div");
    rootContainer.style.padding = "20px";
    rootContainer.style.minHeight = "100vh";

    const pageInstance = new CalculatorPage(rootContainer);

    pageInstance.render();

    return rootContainer;
  },

  parameters: {
    layout: "padded",
  },

  args: {},
  argTypes: {},
};

export const Default = {};
