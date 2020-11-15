const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
  timer: document.getElementById('timer-1'),
};

class CountdownTimer {
  constructor({ selector, targetDate } = {}) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  intervalId = setInterval(() => {
    const currDate = Date.now();
    const timeToEnd = this.targetDate - currDate;
    this.elements(timeToEnd);
    this.endOfCountdown(timeToEnd);
  }, 1000);

  elements(timeToEnd) {
    const days = this.pad(Math.floor(timeToEnd / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((timeToEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(
      Math.floor((timeToEnd % (1000 * 60 * 60)) / (1000 * 60)),
    );
    const secs = this.pad(Math.floor((timeToEnd % (1000 * 60)) / 1000));

    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  endOfCountdown(timeToEnd) {
    if (timeToEnd === 0) {
      clearInterval(this.intervalId);
    }
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});

// const days = Math.floor(time / (1000 * 60 * 60 * 24));
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
// const secs = Math.floor((time % (1000 * 60)) / 1000);
