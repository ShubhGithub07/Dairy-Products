const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// Login
window.onload = function () {
  if (localStorage.getItem("email")) {
    document.getElementById("email").value = localStorage.getItem("email");
    document.getElementById("rememberMe").checked = true;
  }
};

function checkCredentials() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (email == "admin" && password == "password") {
    document.getElementById("message").innerHTML = "Login Successful!";
    if (document.getElementById("rememberMe").checked) {
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("email");
    }
  } else {
    document.getElementById("message").innerHTML =
      "Login Failed. Please try again.";
  }
}

function forgotPassword() {
  alert("Please contact the administrator to reset your password.");
}

// Signup
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let username = document.querySelector("#username").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  console.log(username, email, password);

  let phone = document.querySelector("#phone").value;
  let phoneRegex = /^\d{10}$/;

  if (!phoneRegex.test(phone)) {
    alert("Invalid phone number");
    return;
  }

  // Add your code to submit the form data to the server here...
});
