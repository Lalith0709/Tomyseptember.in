
// script.js

// Set the target birthday date
const birthday = new Date("September 7, 2025 00:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = birthday - now;

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor(
    (distance % (1000 * 60)) / 1000
  );

  // Display the result
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // If the countdown is finished
  if (distance < 0) {
    clearInterval(countdown);
    document.querySelector(".container").innerHTML = `
      <h1>Happy Birthday, Srujana! 🎉</h1>
      <p class="sub">Wishing you smiles, sunshine, and sweet moments all year long.</p>
      <p class="message">From someone who silently cares 💖</p>
    `;
  }
}, 1000);