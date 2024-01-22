let mainP = document.querySelector(".mainP");

function countdown() {
  const targetDate = new Date('January 22, 2024 12:20:00').getTime();

  function updateCountdown() {
    const currentDate = new Date().getTime();
    const remainingTime = targetDate - currentDate;

    if (remainingTime > 0) {
      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
      let finalTime = `Remaining time - ${minutes} minutes, ${seconds} seconds`;
      mainP.textContent = finalTime;
    } else {
      mainP.textContent = "Click On Live Darshan It is Live Now!";
      clearInterval(countdownInterval);
    }
  }
  updateCountdown();
  const countdownInterval = setInterval(updateCountdown, 1000);
}
countdown();
