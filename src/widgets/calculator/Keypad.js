import {
  KEYPAD_LAYOUT,
  BASIC_LAST_ROW,
  CALCULATION_ACTION_KEY,
  ENTER_KEY_TEXT
} from '@/features/calculator'

import { renderKeypadButtons } from '@/shared/utils';

const Keypad = {
  getButtons(mode = 'basic', customDelimiter = '') {
    const basicLastRow = BASIC_LAST_ROW;
    const customLastRow = [basicLastRow[0], basicLastRow[1], customDelimiter || 'DELIM', ''];

    const layout = [
      ...KEYPAD_LAYOUT,
      mode === "basic" ? basicLastRow : customLastRow,
    ];

    const finalLayout = layout.map(row =>
      row.map(item => (item === 'ENTER' ? ENTER_KEY_TEXT : item))
    );

    return finalLayout;
  },

  render(mode = 'basic', customDelimiter = '') {
    const buttons = this.getButtons(mode, customDelimiter);

    return `
      <div class="keypad">
        ${renderKeypadButtons(buttons, CALCULATION_ACTION_KEY, ENTER_KEY_TEXT)}
      </div>
    `;
  },

  bindEvents(root, onInput) {
    root.querySelectorAll(".keypad-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const value = btn.dataset.key;
        onInput?.(value);
      });
    });
  },
};

export default Keypad;
