const eventDate = new Date("April 30, 2025 00:00:00").getTime();

const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
  if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
  if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
  if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');

  if (distance < 0) {
    clearInterval(timer);
    const countdownElement = document.querySelector(".countdown");
    if (countdownElement) countdownElement.innerHTML = '<div class="expired">EVENT STARTED!</div>';
  }
}, 1000);

document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const emailInput = document.getElementById('email');
  const email = emailInput.value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (!email.endsWith('@gmail.com')) {
    alert('Please enter a valid Gmail address (ending with @gmail.com)');
    emailInput.focus();
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  this.submit();
});
