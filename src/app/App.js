import './app.css';
import Router from './Router.js';
import Header from '@/widgets/Header.js';
import Footer from '@/widgets/Footer.js';

const App = {
  init(rootElement) {
    this.renderLayout(rootElement);
    const mainContentElement = rootElement.querySelector('.main-content');

    if (mainContentElement) {
      this.router = new Router(mainContentElement);
      this.router.init();
    } else {
      console.error("Main content element (.main-content) not found.");
    }
  },

  renderLayout(rootElement) {
    rootElement.innerHTML = `
      ${Header.render()} 
      <main class="main-content"></main>
      ${Footer.render()}
    `;
  }
};

export default App;
