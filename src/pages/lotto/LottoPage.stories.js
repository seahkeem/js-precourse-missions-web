import LottoPage from "./LottoPage";

export default {
  title: "Pages/LottoPage",
  tags: ["autodocs"],

  render: () => {
    const rootContainer = document.createElement("div");
    rootContainer.id = 'lotto-page-root-story'; // Add id for play function
    const pageInstance = new LottoPage(rootContainer);
    pageInstance.render();
    return rootContainer;
  },

  play: async ({ canvasElement }) => {
    const rootContainer = canvasElement.querySelector('#lotto-page-root-story');
    if (rootContainer) {
      const pageInstance = new LottoPage(rootContainer);
      pageInstance.render();
      pageInstance.bindEvents();
    }
  },

  parameters: {
    layout: "fullscreen",
  },
};

export const Default = {
  name: '전체 로또 앱',
};
