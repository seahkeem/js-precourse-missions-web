const routes = {
  '/': {
    name: 'Home',
    page: null
  },
  '#/calculator': {
    name: 'Calculator',
    page: null
  },
  '#/racingcar': {
    name: 'Racingcar',
    page: null
  },
  '#/lotto': {
    name: 'Lotto',
    page: null
  },
};

class Router {
  constructor(rootElement) {
    this.rootElement = rootElement;
  }

  init() {
    this.navigate(window.location.hash || '/');

    window.addEventListener('hashchange', () => {
      this.navigate(window.location.hash);
    });
  }

  navigate(path) {
    const routeInfo = routes[path] || routes['/'];

    if (routeInfo.page) {
      this.rootElement.innerHTML = routeInfo.page.render();

    } else {
      this.rootElement.innerHTML = `
        <h2>프로젝트 기본 레이아웃</h2>
      `;
    }
  }
}

export default Router;
