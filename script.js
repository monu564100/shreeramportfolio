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



// Adjust video opacity on load to prevent flash
document.getElementById('video-background').addEventListener('loadeddata', function() {
  this.style.opacity = '1';
});


document.getElementById("touristForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  // You can perform additional validation here if needed
  
  // Example: Send data to server or perform other actions
  console.log("Username:", username);
  console.log("Phone Number:", phoneNumber);
  
  // Optional: Clear the form after submission
  document.getElementById("touristForm").reset();
});