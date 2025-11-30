document.querySelector(".auth-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.querySelectorAll(".auth-form input")[0].value;
    const email = document.querySelectorAll(".auth-form input")[1].value;
    const password = document.querySelectorAll(".auth-form input")[2].value;
    const confirmPassword = document.querySelectorAll(".auth-form input")[3].value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("wastewiseUser", JSON.stringify(user));
    alert("Registration Successful!");
    window.location.href = "login.html";
});
