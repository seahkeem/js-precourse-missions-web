export function renderNavLinks(routes) {
  return routes.map(route => `<li><a href="${route.path}">${route.name}</a></li>`).join('');
}
