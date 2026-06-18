// 1. Regular Expression patterns matching criteria requirements
const regexPatterns = {
    // Alphanumeric, 5-15 characters
    username: /^[a-zA-Z0-9]{5,15}$/,
    // Min 8 characters, at least one uppercase letter, one digit, and one special character
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,
    // Nigerian phone number (+234 followed by 10 digits)
    phone: /^\+234\d{10}$/
};

// DOM Input elements
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const phoneInput = document.getElementById("phone");

// 2. Event Listeners for real-time validation tracking on input handling
usernameInput.addEventListener("input", () => {
    validateField(usernameInput, regexPatterns.username, "username-feedback", "Username meets requirements", "Must be alphanumeric & 5-15 characters long");
});

passwordInput.addEventListener("input", () => {
    validateField(passwordInput, regexPatterns.password, "password-feedback", "Strong security pattern accepted", "Requires min 8 chars, 1 uppercase letter, 1 digit, and 1 special symbol");
});

phoneInput.addEventListener("input", () => {
    validateField(phoneInput, regexPatterns.phone, "phone-feedback", "Valid Nigerian phone number structure", "Must match complete regional format (+234 followed by 10 digits)");
});

// 3. Reusable helper function modifying message text output presentation styles
function validateField(inputElement, pattern, feedbackId, successMsg, errorMsg) {
    const feedbackElement = document.getElementById(feedbackId);
    
    if (pattern.test(inputElement.value)) {
        feedbackElement.innerText = successMsg;
        feedbackElement.className = "feedback valid";
        inputElement.style.borderColor = "#28a745";
    } else {
        feedbackElement.innerText = errorMsg;
        feedbackElement.className = "feedback invalid";
        inputElement.style.borderColor = "#dc3545";
    }
}
