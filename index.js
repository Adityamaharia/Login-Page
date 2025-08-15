const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const loginBox = document.getElementById("form-box-login");
const registerBox = document.getElementById("form-box-register");
const registerlink = document.getElementById("register-link");
const loginlink = document.getElementById("login-link");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

registerlink.addEventListener("click", () => {
  loginBox.style.display = "none";
  registerBox.style.display = "inline-block";
});

loginlink.addEventListener("click", () => {
  loginBox.style.display = "inline-block";
  registerBox.style.display = "none";
});
