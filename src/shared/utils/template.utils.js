export function renderNavLinks(routes) {
  return routes.map(route => `<li><a href="${route.path}">${route.name}</a></li>`).join('');
}

export const renderKeypadButtons = (buttons, calcActionKey, enterText) =>
  buttons.map(
    (row) => `<div class="keypad-row">
      ${row
        .map((item) => {
          const dataKey = item === enterText ? calcActionKey : item;
          const displayValue = item;

          if (item === '') {
            return '<button class="keypad-btn btn-empty" disabled></button>';
          }

          const dataType = Number.isNaN(Number(item)) && item !== '.' && item !== enterText ? 'operator' : 'number';

          return `<button 
            class="keypad-btn" 
            data-key="${dataKey}" 
            data-type="${dataType}"
          >
            ${displayValue}
          </button>`;
        })
      .join("")}
    </div>`
  )
  .join("");
