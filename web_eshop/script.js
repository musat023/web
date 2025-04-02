document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");

    if (username === "musat" && password === "isik") {
        message.textContent = "Login completed!";
        message.style.color = "green";
    } else {
        message.textContent = "Wrong username or password!";
        message.style.color = "red";
    }
});

document.getElementById("openLogin").addEventListener("click", function() {
   
    document.getElementById("loginContainer").style.display = "block";
});


