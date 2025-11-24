import LottoBall from "./LottoBall";

export default {
  title: "Lotto/LottoBall",
  tags: ["autodocs"],

  render: (args) => {
    const container = document.createElement("div");
    container.style.display = 'flex';
    container.style.gap = '15px';

    const ballInstance = new LottoBall(args);
    container.innerHTML = ballInstance.render();

    return container;
  },

  parameters: {
    layout: "centered",
  },

  args: {
    number: 10,
    isBonus: false,
    isSmall: false,
  },
  argTypes: {
    number: { control: { type: 'range', min: 1, max: 45 }, description: '로또 번호 (색상 결정)' },
    isBonus: { control: 'boolean', description: '보너스 번호 표시 여부 (+ 마크)' },
    isSmall: { control: 'boolean', description: '작은 크기 (small) 적용 여부' },
  },
};

export const YellowBall = {
  args: {
    number: 5,
  },
};

export const RedBallAndBonus = {
  args: {
    number: 25,
    isBonus: true,
  },
};

export const SmallPurpleBall = {
  args: {
    number: 42,
    isSmall: true,
  },
};
