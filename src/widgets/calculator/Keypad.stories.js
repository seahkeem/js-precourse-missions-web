import Keypad from "./Keypad";

export default {
  title: "Calculator/Keypad",
  tags: ["autodocs"],
};

export const Basic = {
  render: () => {
    const container = document.createElement("div");

    container.innerHTML = Keypad.render('basic');

    return container;
  },
};

export const Custom = {
  render: () => {
    const container = document.createElement("div");

    container.innerHTML = Keypad.render('custom', '#');

    return container;
  },
};
