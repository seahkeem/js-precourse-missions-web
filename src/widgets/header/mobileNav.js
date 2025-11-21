export function initMobileNav(headerEl) {
  const openButton = headerEl.querySelector('.mobile-menu-button');
  const closeButton = headerEl.querySelector('.nav-close-button');
  const nav = headerEl.querySelector('.app-nav');
  const overlay = headerEl.querySelector('.nav-overlay');

  if (!openButton || !closeButton || !nav || !overlay) return;

  const openMenu = () => {
    nav.classList.add('is-open');
    overlay.classList.add('is-open');
    headerEl.classList.add('menu-is-open');
    document.body.style.overflow = 'hidden';
    openButton.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    nav.classList.remove('is-open');
    overlay.classList.remove('is-open');
    headerEl.classList.remove('menu-is-open');
    document.body.style.overflow = '';
    openButton.setAttribute('aria-expanded', 'false');
  };

  openButton.addEventListener('click', openMenu);
  closeButton.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') closeMenu();
  });
}
