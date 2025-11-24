import { LOTTO_RULES } from "../constants";

class LottoResult {
  #results;
  #lottos;
  #winningNumbers;
  #bonusNumber;
  #totalPrize;
  #purchaseAmount;

  constructor(lottos, winningNumbers, bonusNumber, purchaseAmount) {
    this.#lottos = lottos;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#purchaseAmount = purchaseAmount;
    this.#results = this.#initializeResults();
    this.#totalPrize = 0;
    this.#calculateResults();
  }

  #initializeResults() {
    return LOTTO_RULES.RANK_ORDER.reduce((acc, rankKey) => {
      acc[rankKey] = 0;
      return acc;
    }, {});
  }

  #calculateResults() {
    this.#lottos.forEach(lotto => {
      const { matchCount, bonusMatch } = this.#checkLotto(lotto.getNumbers());
      this.#determineRank(matchCount, bonusMatch);
    });
  }

  #checkLotto(lottoNumbers) {
    const matchCount = this.#countMatches(lottoNumbers);
    let bonusMatch = false;

    if (matchCount === 5 && lottoNumbers.includes(this.#bonusNumber)) {
      bonusMatch = true;
    }

    return { matchCount, bonusMatch };
  }

  #countMatches(lottoNumbers) {
    const winningSet = new Set(this.#winningNumbers);
    let count = 0;

    lottoNumbers.forEach(number => {
      if (winningSet.has(number)) {
        count += 1;
      }
    });

    return count;
  }

  #determineRank(matchCount, bonusMatch) {
    if (this.#checkFirstRank(matchCount)) return;
    if (this.#checkSecondOrThirdRank(matchCount, bonusMatch)) return;
    if (this.#checkFourthRank(matchCount)) return;
    /* eslint-disable-next-line no-useless-return */
    if (this.#checkFifthRank(matchCount)) return;
  }

  #checkFirstRank(matchCount) {
    if (matchCount === LOTTO_RULES.WINNING_PRIZES[1].match) {
      this.#addResult(1);
      return true;
    }
    return false;
  }

  #checkSecondOrThirdRank(matchCount, bonusMatch) {
    const prizes = LOTTO_RULES.WINNING_PRIZES;

    if (matchCount === prizes[3].match) {
      if (bonusMatch && prizes[2].bonus) {
        this.#addResult(2);
        return true;
      }
      this.#addResult(3);
      return true;
    }
    return false;
  }

  #checkFourthRank(matchCount) {
    if (matchCount === LOTTO_RULES.WINNING_PRIZES[4].match) {
      this.#addResult(4);
      return true;
    }
    return false;
  }

  #checkFifthRank(matchCount) {
    if (matchCount === LOTTO_RULES.WINNING_PRIZES[5].match) {
      this.#addResult(5);
      return true;
    }
    return false;
  }

  #addResult(rankKey) {
    this.#results[rankKey] += 1;
    this.#totalPrize += LOTTO_RULES.WINNING_PRIZES[rankKey].prize;
  }

  getReturnRate() {
    if (this.#purchaseAmount === 0) {
      return 0.0;
    }
    const rate = (this.#totalPrize / this.#purchaseAmount) * 100;
    return Math.round(rate * 100) / 100;
  }

  getResults() {
    return this.#results;
  }
}

export default LottoResult;
