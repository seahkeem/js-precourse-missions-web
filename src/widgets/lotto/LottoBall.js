import { getBallColor } from '@/features/lotto';

class LottoBall {
  constructor({ number, isBonus = false, isSmall = false }) {
    this.number = number;
    this.isBonus = isBonus;
    this.isSmall = isSmall;
  }

  render() {
    const color = getBallColor(this.number);
    const bonusMark = this.isBonus ? '+' : '';

    return `
      <span 
        class="lotto-ball ${this.isSmall ? 'small' : 'large'}"
        style="background-color: ${color};"
      >
        ${this.number}${bonusMark}
      </span>
    `;
  }
}

export default LottoBall;
