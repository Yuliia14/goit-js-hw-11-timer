import './css/styles.scss';

const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]')
}

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

    start() {
    setInterval(() => {
    const currentTime = Date.now();
    const targetDate = new Date();
    const DeltaTime = this.targetDate - currentTime;
      
      const { days, hours, mins, secs } = getTimeComponents(DeltaTime);
      
      updateClockFace({ days, hours, mins, secs });
    
      console.log(`${days}:${hours}:${mins}:${secs}`);
  }, 1000);
  } 
  }

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 14, 2021'),
});

timer.start();

function pad(value) {
  return String(value).padStart(2, '0');
}


function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}


function updateClockFace({ days, hours, mins, secs }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}
  

