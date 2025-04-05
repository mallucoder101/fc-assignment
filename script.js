const eventDate = new Date("April 30, 2025 00:00:00").getTime();

const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (daysEl && hoursEl && minutesEl && secondsEl) {
    daysEl.textContent = days.toString().padStart(2, '0');
    hoursEl.textContent = hours.toString().padStart(2, '0');
    minutesEl.textContent = minutes.toString().padStart(2, '0');
    secondsEl.textContent = seconds.toString().padStart(2, '0');
  }

  if (distance < 0) {
    clearInterval(timer);
    const countdownContainer = document.querySelector(".countdown");
    if (countdownContainer) {
      countdownContainer.innerHTML = '<div class="expired">EVENT STARTED!</div>';
    }
  }
}, 1000);

const registrationForm = document.getElementById('registrationForm');

if (registrationForm) {
  registrationForm.addEventListener('submit', function (event) {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    if (!emailInput || !passwordInput || !confirmPasswordInput) return;

    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (!email.endsWith('@gmail.com')) {
      alert('Please enter a valid Gmail address (ending with @gmail.com)');
      emailInput.focus();
      event.preventDefault();
      return;
    }
