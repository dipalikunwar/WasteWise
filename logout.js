function logout() {
    localStorage.removeItem("wastewiseLoggedIn");
    alert("Logged out successfully!");
    window.location.href = "login.html";
}
