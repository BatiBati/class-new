const [hour, min, sec] = document.querySelectorAll(".timers > div");
const [startBtn, stopBtn, resetBtn] =
  document.querySelectorAll(".buttons > button");

let duration = 0;
let intervalID = null;

const generateTime = (duration) => {
  const sec = duration % 60;
  const min = ((duration - sec) / 60) % 60;
  const hour = Math.floor(duration / 3600);
  return {
    sec,
    min,
    hour,
  };
};

startBtn.addEventListener("click", () => {
  if (intervalID !== null) return;

  intervalID = setInterval(() => {
    duration++;
    const times = generateTime(duration);
    sec.innerHTML = times.sec < 10 ? "0" + times.sec : times.sec;
    min.innerHTML = times.min.toString().padStart(2, "0");
    hour.innerHTML = times.hour.toString().padStart(2, "0");
  }, 100);
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalID);
  intervalID = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(intervalID);
  intervalID = null;
  duration = 0;

  const times = generateTime(duration);
  sec.innerHTML = times.sec < 10 ? "0" + times.sec : times.sec;
  min.innerHTML = times.min.toString().padStart(2, "0");
  hour.innerHTML = times.hour.toString().padStart(2, "0");
});
