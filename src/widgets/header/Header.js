import './header.css';
import {
  NAV_ROUTES,
  HEADER_TITLE,
  HAMBURGER_SVG_ICON,
  CLOSE_SVG_ICON
} from '@/shared/constants';
import { renderNavLinks } from '@/shared/utils';
import { initMobileNav } from './mobileNav';

const Header = {
  attachEvents() {
    const headerElement = document.querySelector('.app-header');
    if (!headerElement) return;

    initMobileNav(headerElement);
  },

  render() {
    return `
      <header class="app-header">
        <h1><a href="/">${HEADER_TITLE}</a></h1>
        <button class="mobile-menu-button" aria-expanded="false" aria-controls="main-nav-list">
          ${HAMBURGER_SVG_ICON}
        </button>
        <div class="nav-overlay"></div>
        <nav class="app-nav" id="main-nav-list">
          <div class="nav-header"> 
            <button class="nav-close-button">
              ${CLOSE_SVG_ICON}
            </button>
          </div>
          <ul>
            ${renderNavLinks(NAV_ROUTES)}
          </ul>
        </nav>
      </header>
    `;
  }
};

export default Header;
