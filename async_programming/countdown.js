// countdown.js

let count = 10;

const timer = setInterval(() => {
  console.log(count);
  count--;

  if (count < 0) {
    clearInterval(timer);
    console.log("Time's up!");
  }
}, 1000); // Run every 1000 milliseconds (1 second)