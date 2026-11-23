
document.getElementById("signupForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let gender = document.getElementById("gender").value;
    let terms = document.getElementById("terms").checked;

    let message = document.getElementById("message");

    if (!name || !email || !phone || !password || !confirmPassword || !gender) {
        message.style.color = "red";
        message.innerText = "Please fill all fields!";
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        message.style.color = "red";
        message.innerText = "Enter a valid email address!";
        return;
    }

    if (password.length < 8) {
        message.style.color = "red";
        message.innerText = "Password must be at least 8 characters!";
        return;
    }

    if (password !== confirmPassword) {
        message.style.color = "red";
        message.innerText = "Passwords do not match!";
        return;
    }

    if (!terms) {
        message.style.color = "red";
        message.innerText = "Please accept Terms & Conditions!";
        return;
    }

    message.style.color = "green";
    message.innerText = "Signup Successful! Welcome " + name + " 🎉";

    this.reset();
});
