document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const companySelect = document.getElementById("company");
    const positionCheckboxes = document.getElementsByName("position");
    const fullNameInput = document.getElementById("fullName");
    const phoneNumberInput = document.getElementById("phoneNumber");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const checkAllCheckbox = document.getElementById("check-all");
    const submitButton = document.getElementById("submit-button");
  
    submitButton.addEventListener("click", function () {
      // Validation for Company
      if (companySelect.value === "") {
        alert("Please select a company.");
        return;
      }
  
      // Validation for Position
      let checkedPositions = Array.from(positionCheckboxes).filter((checkbox) => checkbox.checked);
      if (checkedPositions.length === 0 || (checkedPositions.length === 1 && checkedPositions[0] === checkAllCheckbox)) {
        alert("Please select at least one position.");
        return;
      }
  
      // Validation for Full Name
      const fullName = fullNameInput.value.trim();
      if (!/^[A-Za-z0-9 ]+$/.test(fullName) || fullName.split(" ").length > 2) {
        alert("Please enter a valid full name (up to 2 words with no symbols).");
        return;
      }
  
      // Validation for Phone Number
      const phoneNumber = phoneNumberInput.value;
      if (!/^\d{11}$/.test(phoneNumber)) {
        alert("Please enter a valid phone number with 11 digits.");
        return;
      }
  
      // Validation for Password and Confirm Password
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;
      if (password === "" || password !== confirmPassword) {
        alert("Passwords do not match or are empty.");
        return;
      }
  
      // If all validations pass, you can submit the form or perform further actions.
      alert("Form submitted successfully!");
    });
  });
  