function login() {
  const user = username.value;
  const pass = password.value;

  if (user === "admin" && pass === "admin21") {
    localStorage.setItem("adminLogin", "true");
    location.href = "admin.html";
  } else {
    error.innerText = "Username atau password salah!";
  }
}
