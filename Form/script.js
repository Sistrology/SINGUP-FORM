function validateLogin() {
    var email = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;

    if (email === "syedafizanaz497@gmail.com" && password === "123456") {
        alert("Login successful!");
        window.location.assign("des.html");
    } else {
        alert("Invalid username or password.");
    }
}
