// =======================
// DARK / LIGHT MODE
// =======================
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// =======================
// REAL-TIME CLOCK
// =======================
function updateClock() {
  const now = new Date();
  document.getElementById("time").textContent = now.toLocaleTimeString();
  document.getElementById("date").textContent = now.toLocaleDateString();
}
setInterval(updateClock, 1000);
updateClock();

// =======================
// WEATHER WIDGET
// =======================
// Replace with your API key from https://openweathermap.org/
const apiKey = "YOUR_API_KEY"; 
const city = "Nairobi";

async function fetchWeather() {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await res.json();

    document.getElementById("location").textContent = data.name;
    document.getElementById("temperature").textContent = `${data.main.temp} °C`;
    document.getElementById("condition").textContent = data.weather[0].description;
  } catch (err) {
    document.getElementById("location").textContent = "Weather unavailable";
  }
}
fetchWeather();

// =======================
// CONTACT FORM VALIDATION
// =======================
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("formFeedback");

  if (!name || !email || !message) {
    feedback.textContent = "⚠️ All fields are required!";
    feedback.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    feedback.textContent = "⚠️ Please enter a valid email.";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = "✅ Message sent successfully!";
  feedback.style.color = "green";

  // Reset form
  document.getElementById("contactForm").reset();
});