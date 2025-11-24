import CalculatorPage from "@/pages/calculator";

const routes = {
  '/': {
    name: 'Home',
    page: null
  },
  '/calculator': {
    name: 'Calculator',
    page: null
  },
  '/racingcar': {
    name: 'Racingcar',
    page: null
  },
  '/lotto': {
    name: 'Lotto',
    page: null
  },
};

class Router {
  constructor(rootElement) {
    this.rootElement = rootElement;
  }

  init() {
    this.registerPages();
    this.handleInitialLoad();
    this.handlePopState();
    this.handleLinkClicks();
  }

  registerPages() {
    routes['/calculator'].page = new CalculatorPage(this.rootElement);
  }

  handleInitialLoad() {
    this.navigate(window.location.pathname);
  }

  handlePopState() {
    window.addEventListener('popstate', () => {
      this.navigate(window.location.pathname, false);
    });
  }

  handleLinkClicks() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (href && href.startsWith('/')) {
        e.preventDefault();
        this.navigate(href, true);
      }
    });
  }

  navigate(path, push = true) {
    const routeInfo = this.getRoute(path);

    if (push) this.pushState(path);
    this.renderPage(routeInfo);
  }

  getRoute(path) {
    return routes[path] || routes['/'];
  }

  pushState(path) {
    window.history.pushState({}, '', path);
  }

  renderPage(routeInfo) {
    if (routeInfo.page) {
      routeInfo.page.render();
      routeInfo.page.bindEvents();
      return;
    }

    this.rootElement.innerHTML = `<h2>프로젝트 기본 레이아웃</h2>`;
  }
}

export default Router;
