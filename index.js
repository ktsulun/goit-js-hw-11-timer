class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    // this.refs = {
    //   days: document.querySelector('[data-value="days"]'),
    //   hours: document.querySelector('[data-value="hours"]'),
    //   mins: document.querySelector('[data-value="mins"]'),
    //   secs: document.querySelector('[data-value="secs"]'),
    // };
  }

  get Timer() {
    let timer = '';

    return (timer = document.querySelector(this.selector));
  }
  get Day() {
    let day = ``;
    return (day = this.Timer.querySelector('[data-value="days"]'));
  }
  get Hours() {
    let hours = ``;
    return (hours = this.Timer.querySelector('[data-value="hours"]'));
  }
  get Minutes() {
    let mins = ``;
    return (mins = this.Timer.querySelector('[data-value="mins"]'));
  }
  get Seconds() {
    let secs = ``;
    return (secs = this.Timer.querySelector('[data-value="secs"]'));
  }

  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = this.targetDate - currentTime;
    this.getTimeComponents(deltaTime);
    this.countDownStop(deltaTime);
  }, 1000);

  getTimeComponents(deltaTime) {
    const days = this.pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(
      Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)),
    );
    const secs = this.pad(Math.floor((deltaTime % (1000 * 60)) / 1000));

    this.Day.textContent = `${days}`;
    this.Hours.textContent = `${hours}`;
    this.Minutes.textContent = `${mins}`;
    this.Seconds.textContent = `${secs}`;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  countDownStop(deltaTime) {
    if (deltaTime === 0) {
      clearInterval(this.intervalId);
    }
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 14, 2021'),
});

const timerTestNew = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('May 14, 2022'),
});

const timerTest = new CountdownTimer({
  selector: '#timer-3',
  targetDate: new Date('May 1, 2022'),
});
