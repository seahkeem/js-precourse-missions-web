class DelimiterSelector {
  constructor(onChange = () => {}) {
    this.onChange = onChange;
  }

  render() {
    return `
      <div class="delimiter-area">
        <div class="delimiter-options">
          <label>
            <input type="radio" name="delimiter-mode" value="basic" checked />
            기본 구분자
          </label>

          <label>
            <input type="radio" name="delimiter-mode" value="custom" />
            커스텀 구분자
          </label>
        </div>

        <div class="delimiter-custom-box hidden">
          <input 
            type="text" 
            class="delimiter-input"
            maxlength="1"
            placeholder="구분자 입력"
          />
          <button class="delimiter-confirm-btn">확인</button>
        </div>
      </div>
    `;
  }
}

export default DelimiterSelector;
