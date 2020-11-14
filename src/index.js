import './styles.css';
const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]')
}

class CountdownTimer {
  constructor({ selector, targetDate, onTick }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.onTick = onTick;

    this.init();
  }

  init() {
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }

    start() {
    setInterval(() => {
    const currentTime = Date.now();
    const targetDate = new Date();
    const deltaTime = this.targetDate - currentTime;
      
    const time = this.getTimeComponents(deltaTime);
      
      this.onTick(time);
    
  }, 1000);
  } 

  getTimeComponents(time) {
  const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
  }
  
  pad(value) {
    return String(value).padStart(2, '0');
  }

  }

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 14, 2021'),
  onTick: updateClockFace,
});

timer.start();


function updateClockFace({ days, hours, mins, secs }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}
  