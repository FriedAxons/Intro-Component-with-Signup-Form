document.getElementById("submitButton").addEventListener("click", function () {
  const inputs = document.querySelectorAll(".input");
  const form = document.querySelector("form");
  let allValid = true;
  let invalidCount = 0;

  inputs.forEach((input) => {
    const errorIcon = input.nextElementSibling;
    const errorText = input.nextElementSibling.nextElementSibling;

    if (
      input.value.trim() === "" ||
      (input.type === "email" && !validateEmail(input.value)) ||
      ((input.id === "firstName" || input.id === "lastName") &&
        input.value.trim().length < 2)
    ) {
      input.classList.add("invalid");
      errorIcon.classList.add("invalid");
      errorText.classList.add("invalid");
      allValid = false;
      invalidCount++;

      if (input.id !== "email") {
        input.setAttribute("placeholder", "");
      } else {
        input.setAttribute("placeholder", "email@example/com");
      }
    } else {
      input.classList.remove("invalid");
      errorIcon.classList.remove("invalid");
      errorText.classList.remove("invalid");
      resetPlaceholder(input);
    }
  });

  adjustFormPadding(invalidCount);

  if (allValid) {
    alert("Form submitted successfully!");
  }
});

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
  return re.test(String(email).toLowerCase());
}

function resetPlaceholder(input) {
  switch (input.id) {
    case "firstName":
      input.setAttribute("placeholder", "First Name");
      break;
    case "lastName":
      input.setAttribute("placeholder", "Last Name");
      break;
    case "email":
      input.setAttribute("placeholder", "Email Address");
      break;
    case "password":
      input.setAttribute("placeholder", "Password");
      break;
  }
}

function adjustFormPadding(invalidCount) {
  const form = document.querySelector("form");
  switch (invalidCount) {
    case 0:
      form.style.padding = "0px 35px 25px";
      break;
    case 1:
      form.style.padding = "10px 35px 30px";
      break;
    case 2:
      form.style.padding = "15px 35px 35px";
      break;
    case 3:
      form.style.padding = "20px 35px 40px";
      break;
    case 4:
      form.style.padding = "25px 35px 45px";
      break;
  }
}

document.querySelectorAll(".input").forEach((input) => {
  input.addEventListener("input", function () {
    if (this.classList.contains("invalid")) {
      this.classList.remove("invalid");
      this.nextElementSibling.classList.remove("invalid");
      this.nextElementSibling.nextElementSibling.classList.remove("invalid");
      resetPlaceholder(this);
      adjustFormPadding(document.querySelectorAll(".input.invalid").length);
    }
  });
});
