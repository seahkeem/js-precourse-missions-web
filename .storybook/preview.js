import '@/shared/styles/index.css';
import '@/pages/calculator/calculator.css';
import '@/pages/lotto/lotto.css';
import '@/pages/racing-car/racing-car.css';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
