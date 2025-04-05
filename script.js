const eventDate = new Date("April 30, 2025 00:00:00").getTime();

const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days.toString().padStart(2, '0');
  document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');

  if (distance < 0) {
    clearInterval(timer);
    document.querySelector(".countdown").innerHTML = '<div class="expired">EVENT STARTED!</div>';
  }
}, 1000);

document.getElementById('registrationForm').addEventListener('submit', function (event) {
  const emailInput = document.getElementById('email');
  const email = emailInput.value;


  if (!email.endsWith('@gmail.com')) {
    alert('Please enter a valid Gmail address (ending with @gmail.com)');
    emailInput.focus();
    event.preventDefault();
    return false;
  }


  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    event.preventDefault();
  }
});
