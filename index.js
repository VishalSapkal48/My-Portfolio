(function() {
    emailjs.init("cW9t-fxwAh5t3CEwo"); // Replace with your EmailJS public key
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const form = event.target; // Get the form element

    console.log("Form Data:", new FormData(form)); // Log form data for debugging

    emailjs.sendForm("service_cwuheyi", "template_okcw27l", form) // Pass the form element directly
        .then(function(response) {
            document.getElementById("responseMessage").innerHTML = "<p class='text-success'>Message sent successfully!</p>";
            form.reset(); // Reset the form fields
        }, function(error) {
            document.getElementById("responseMessage").innerHTML = "<p class='text-danger'>Oops! Something went wrong. Please try again.</p>";
            console.error('EmailJS Error:', error); // Log the error for debugging
        });
});
