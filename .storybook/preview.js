import '@/shared/styles/index.css';
import '@/pages/calculator/calculator.css';
import '@/pages/lotto/lotto.css';

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
