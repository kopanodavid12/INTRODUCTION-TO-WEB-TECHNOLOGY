document.addEventListener("DOMContentLoaded", function () {
    // A. Welcome Message on Sign-Up Page Load
    // Checks if the current page is signup.html based on the form presence or URL
    const signupForm = document.getElementById("signupForm");
    
    if (signupForm) {
        alert("Welcome to Richfield Connect. Please complete your profile.");

        // B. Form Validation on Submission
        signupForm.addEventListener("submit", function (event) {
            const studentNumberInput = document.getElementById("studentNumber").value.trim();
            const emailInput = document.getElementById("email").value.trim();

            // Validation Rule 1: Student Number must be numeric and contain a minimum of 6 digits
            const isNumeric = /^\d+$/.test(studentNumberInput);
            if (!isNumeric || studentNumberInput.length < 6) {
                alert("Validation Error: Student number must be numeric and contain a minimum of 6 digits.");
                event.preventDefault(); // Stop form submission
                return;
            }

            // Validation Rule 2: Email address must contain both "@" and "." characters
            if (!emailInput.includes("@") || !emailInput.includes(".")) {
                alert("Validation Error: Email address must contain both '@' and '.' characters.");
                event.preventDefault(); // Stop form submission
                return;
            }

            // If all checks pass
            alert("Registration submitted successfully! Welcome to Richfield Connect.");
        });
    }
});