document.querySelector(".auth-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.querySelectorAll(".auth-form input")[0].value;
    const password = document.querySelectorAll(".auth-form input")[1].value;

    const savedUser = JSON.parse(localStorage.getItem("wastewiseUser"));

    if (!savedUser) {
        alert("No account found! Please register first.");
        return;
    }

    if (email === savedUser.email && password === savedUser.password) {
        alert("Login Successful!");
        localStorage.setItem("wastewiseLoggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid email or password!");
    }
});
