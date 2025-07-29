
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
      <p class="sub">Wishing you happy 18th birthday .</p>
      <p class="message">happy birthday papa 💖...
        ela unnav?? bagunav anukuntuna... neetho asala eppudu matlada le kani chala deep ga attach ipoya
        maybe neelo unna charm emo adhi.. here are some heartfull wishes to a person 
        who is incredibly smart and incredibly silly. to a pearson who is beautiful,charming,and elegant
        to a girl who is intellegent,and stupid(a bit).. to a girl who can be spotted in crowd of million and more 
        ela chepukuntu povali ante okka janma chaladhu emo...anyway wishing you a happy birthday...</p>
    `;
  }
}, 1000);