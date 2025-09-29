
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
// Select the form
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the page from refreshing

    // Get field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate
    if (!name || !email || !message) {
        alert("⚠️ Please fill in all fields before submitting.");
        return;
    }

    // Simple email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("⚠️ Please enter a valid email address.");
        return;
    }

    // Simulate form submission success
    alert(`✅ Thank you, ${name}! Your message has been sent.`);

    // Clear the form
    form.reset();
//     document.getElementById("contactForm").addEventListener("submit", function(e) {
//   e.preventDefault(); // stop page reload

//   let name = document.getElementById("name").value;
//   let email = document.getElementById("email").value;
//   let message = document.getElementById("message").value;

//   let subject = "New message from " + name;
//   let body = "Name: " + name + "%0AEmail: " + email + "%0A%0A" + message;

//   // Replace with your email
//   window.location.href = "mailto:lordalfred055@gmail.com?subject=" + subject + "&body=" + body;
// });
});