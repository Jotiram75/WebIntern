document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Error message elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    // Reset messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    // Validate Name
    if (name === "") {
      nameError.textContent = "Name is required";
      isValid = false;
    }

    // Validate Email (Regex)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      emailError.textContent = "Email is required";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      emailError.textContent = "Invalid email format";
      isValid = false;
    }

    // Validate Message
    if (message === "") {
      messageError.textContent = "Message is required";
      isValid = false;
    }

    // If valid
    if (isValid) {
      successMessage.textContent = "Form submitted successfully!";
      document.getElementById("contactForm").reset();
    }
  });
