import './css/styles.scss';

class CountdownTimer {

  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
      get Timer() {
    let timer = '';

    return (timer = document.querySelector(this.selector));
    }
     
  get Days() {
      let days = '';
    return (days = this.Timer.querySelector('[data-value="days"]'));
  }
  get Hours() {
    let hours = '';
    return (hours = this.Timer.querySelector('[data-value="hours"]'));
  }
  get Minutes() {
    let mins = '';
    return (mins = this.Timer.querySelector('[data-value="mins"]'));
  }
  get Seconds() {
    let secs = '';
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
    const hours = this.pad(Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((deltaTime % (1000 * 60)) / 1000));
 
    this.Days.textContent = `${days}`;
    this.Hours.textContent = `${hours}`;
    this.Minutes.textContent = `${mins}`;
    this.Seconds.textContent = `${secs}`;
  }
  
  pad(value) {
    return String(value).padStart(2, '0');
  };
  
  countDownStop(deltaTime) {
    if (deltaTime === 0) {
      clearInterval(this.intervalId);
    }
  }
};

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 14, 2021'),
});
