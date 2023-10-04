document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
    })
    .then(response => response.text())
    .then(data => {
        if (data === "Login successful") {
            alert("Login successful!");
            // Redirect to a success page if needed
        } else {
            alert("Invalid username or password. Please try again.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
