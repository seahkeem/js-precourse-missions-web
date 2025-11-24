import LottoContainer from "./LottoContainer";

class MockLotto {
  constructor(numbers) {
    this.numbers = numbers;
  }

  getNumbers() {
    return this.numbers;
  }
}

export default {
  title: "Lotto/LottoContainer",
  tags: ["autodocs"],

  render: (args) => {
    const container = document.createElement("div");
    const containerInstance = new LottoContainer();
    container.innerHTML = containerInstance.render(args);

    container.style.width = '600px';
    container.style.padding = '20px';
    return container;
  },

  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    lottos: [],
  }
};

export const WithLottos = {
  args: {
    lottos: [
      new MockLotto([1, 2, 3, 4, 5, 6]),
      new MockLotto([7, 8, 9, 10, 11, 12]),
      new MockLotto([13, 14, 15, 16, 17, 18]),
    ]
  }
};
