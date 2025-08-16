const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const loginBox = document.getElementById("form-box-login");
const registerBox = document.getElementById("form-box-register");
const registerlink = document.getElementById("register-link");
const loginlink = document.getElementById("login-link");

// Toggle navigation menu on hamburger click
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Switch to register box
registerlink.addEventListener("click", () => {
  loginBox.style.display = "none";
  registerBox.style.display = "inline-block";
});

// Switch to login box
loginlink.addEventListener("click", () => {
  loginBox.style.display = "inline-block";
  registerBox.style.display = "none";
});

// Close nav if clicked outside
document.addEventListener("click", (event) => {
  if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
    navMenu.classList.remove("active");
  }
});
