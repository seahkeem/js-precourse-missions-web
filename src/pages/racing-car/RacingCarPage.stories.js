import RacingCarPage from './RacingCarPage.js';

export default {
  title: 'Pages/RacingCarPage',
  component: RacingCarPage,
  tags: ['autodocs'],
  render: () => {
    const rootContainer = document.createElement('div');
    rootContainer.id = 'racing-car-page-root-story';
    const pageInstance = new RacingCarPage(rootContainer);
    pageInstance.render();
    return rootContainer;
  },
};

export const Default = {
  play: async ({ canvasElement }) => {
    const rootContainer = canvasElement.querySelector('#racing-car-page-root-story');
    if (rootContainer) {
      const pageInstance = new RacingCarPage(rootContainer);
      pageInstance.render();
      pageInstance.bindEvents();
    }
  },
};
