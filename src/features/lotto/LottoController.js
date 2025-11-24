import Lotto from './domain/Lotto.js';
import LottoResult from './domain/LottoResult.js';
import LottoValidator from './domain/LottoValidator.js';
import { LOTTO_RULES, getBallColor } from './constants.js';
import { COMMON_MESSAGES } from '@/shared/constants/messages.constants.js';

class LottoController {
  #rootElement;
  #lottoContainerWidget;
  #prizeTableWidget;

  #lottoResultAreaEl;
  #purchasedLottosDisplayEl;

  #selectedWinning = [];
  #selectedBonus = null;

  constructor({ rootElement, lottoContainer, prizeTable }) {
    this.#rootElement = rootElement;
    this.#lottoContainerWidget = lottoContainer;
    this.#prizeTableWidget = prizeTable;

    this.reset = this.reset.bind(this);
    this.handleCheckResult = this.handleCheckResult.bind(this);
  }

  init() {
    this.#lottoResultAreaEl = this.#rootElement.querySelector('.lotto-result-area');
    this.#purchasedLottosDisplayEl = document.createElement('div');
    this.#lottoResultAreaEl.prepend(this.#purchasedLottosDisplayEl);
    this.#bindEvents();
  }

  handleCheckResult() {
    try {
      const amount = this.#validateAndGetAmount();
      this.#validateWinningNumbersInput(this.#selectedWinning, this.#selectedBonus);
      LottoValidator.validateBonusNumber(this.#selectedBonus, this.#selectedWinning);
      const { lottos, resultData } = this.#executeCalculation(amount);
      this.#displayResults(lottos, resultData);

    } catch (error) {
      this.#showError(error.message);
    }
  }

  #validateAndGetAmount() {
    const purchaseAmountInput = this.#rootElement.querySelector('#purchase-amount');
    const amount = Number(purchaseAmountInput.value);

    LottoValidator.validatePurchaseAmount(amount);
    return amount;
  }

  #executeCalculation(amount) {
    const lottoCount = amount / LOTTO_RULES.PRICE;
    const lottos = Array.from({ length: lottoCount }, () => new Lotto());

    const lottoResult = new LottoResult(
      lottos,
      this.#selectedWinning,
      this.#selectedBonus,
      amount
    );

    return {
      lottos,
      resultData: {
        result: lottoResult.getResults(),
        profitRate: lottoResult.getReturnRate(),
      },
    };
  }

  #displayResults(lottos, prizeData) {
    this.#purchasedLottosDisplayEl.innerHTML = this.#lottoContainerWidget.renderPurchasedLottos(lottos);

    const oldPrizeTable = this.#lottoResultAreaEl.querySelector('.lotto-prize-area');
    const newPrizeTableHTML = this.#prizeTableWidget.render(prizeData);

    if (oldPrizeTable) {
      oldPrizeTable.outerHTML = newPrizeTableHTML;
    } else {
      this.#lottoResultAreaEl.innerHTML += newPrizeTableHTML;
    }

    const newPrizeTableEl = this.#lottoResultAreaEl.querySelector('.lotto-prize-area');
    this.#prizeTableWidget.bindEvents(newPrizeTableEl, this.reset);
  }

  reset() {
    this.#selectedWinning = [];
    this.#selectedBonus = null;

    this.#lottoResultAreaEl.innerHTML = this.#prizeTableWidget.render({ result: null, profitRate: null });
    this.#purchasedLottosDisplayEl.innerHTML = '';

    this.#rootElement.querySelector('#purchase-amount').value = '';
    this.#rootElement.querySelectorAll('.lotto-ball.selected').forEach(el => {
      el.classList.remove('selected');
      el.style.backgroundColor = 'var(--color-white)';
      el.style.color = 'var(--color-black)';
    });
  }

  #bindEvents() {
    const resultButton = this.#rootElement.querySelector('#result-button');
    const winningGrid = this.#rootElement.querySelector('.winning-grid');
    const bonusGrid = this.#rootElement.querySelector('.bonus-grid');

    winningGrid.addEventListener('click', this.#handleWinningGridClick.bind(this));
    bonusGrid.addEventListener('click', this.#handleBonusGridClick.bind(this));
    resultButton.addEventListener('click', this.handleCheckResult);
  }

  #handleWinningGridClick(e) {
    if (!e.target.matches('.lotto-ball')) return;

    const ballElement = e.target;
    const number = Number(ballElement.dataset.number);

    if (this.#selectedWinning.includes(number)) {
      this.#selectedWinning = this.#selectedWinning.filter(n => n !== number);
      ballElement.classList.remove('selected');
      ballElement.style.backgroundColor = 'var(--color-white)';
      ballElement.style.color = 'var(--color-black)';
    } else if (this.#selectedWinning.length < 6) {
      this.#selectedWinning.push(number);
      ballElement.classList.add('selected');
      ballElement.style.backgroundColor = getBallColor(number);
      ballElement.style.color = 'var(--color-white)';
    }
  }

  #handleBonusGridClick(e) {
    if (!e.target.matches('.lotto-ball')) return;

    const number = Number(e.target.dataset.number);
    this.#toggleBonusSelection(number, e.target);
  }

  #deselectCurrentBonusBall() {
    const bonusGrid = this.#rootElement.querySelector('.bonus-grid');
    const currentSelected = bonusGrid.querySelector('.selected');
    if (currentSelected) {
      currentSelected.classList.remove('selected');
      currentSelected.style.backgroundColor = 'var(--color-white)';
      currentSelected.style.color = 'var(--color-black)';
    }
  }

  #toggleBonusSelection(number, targetElement) {
    const isAlreadySelected = this.#selectedBonus === number;

    this.#deselectCurrentBonusBall();

    if (isAlreadySelected) {
      this.#selectedBonus = null;
    } else {
      this.#selectedBonus = number;
      /* eslint-disable-next-line no-param-reassign */
      targetElement.classList.add('selected');
      /* eslint-disable-next-line no-param-reassign */
      targetElement.style.backgroundColor = getBallColor(number);
      /* eslint-disable-next-line no-param-reassign */
      targetElement.style.color = 'var(--color-white)';
    }
  }

  #validateWinningNumbersInput(winningNumbers, bonusNumber) {
    if (winningNumbers.length !== 6 || bonusNumber === null) {
      throw new Error(
        `${COMMON_MESSAGES.ERROR_PREFIX}당첨번호 6개와 보너스번호 1개를 선택해주세요.`
      );
    }
  }

  #generateLottos(amount) {
    const lottoCount = amount / LOTTO_RULES.PRICE;
    return Array.from({ length: lottoCount }, () => new Lotto());
  }

  #calculateResults(lottos, amount) {
    const lottoResult = new LottoResult(
      lottos,
      this.#selectedWinning,
      this.#selectedBonus,
      amount
    );

    return {
      result: lottoResult.getResults(),
      profitRate: lottoResult.getReturnRate(),
    };
  }

  #showError(message) {
    console.error("Lotto Error:", message);
  }
}

export default LottoController;
