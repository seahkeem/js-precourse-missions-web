import LottoPage from "./LottoPage";

export default {
  title: "Pages/LottoPage",
  tags: ["autodocs"],

  render: () => {
    const rootContainer = document.createElement("div");

    const pageInstance = new LottoPage(rootContainer);

    pageInstance.render();

    rootContainer.style.padding = "20px";
    rootContainer.style.minHeight = "100vh";
    rootContainer.style.display = 'flex';
    rootContainer.style.justifyContent = 'center';

    return rootContainer;
  },

  parameters: {
    layout: "padded",
  },

  args: {},
  argTypes: {},
};

export const Default = {};
