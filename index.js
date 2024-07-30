document.getElementById("submitButton").addEventListener("click", function () {
  const inputs = document.querySelectorAll(".input");
  const form = document.querySelector("form");
  let allValid = true;

  inputs.forEach((input) => {
    const errorIcon = input.nextElementSibling;
    const errorText = input.nextElementSibling.nextElementSibling;

    if (
      input.value.trim() === "" ||
      (input.type === "email" && !validateEmail(input.value))
    ) {
      form.style.padding = "25px 35px 45px";
      input.classList.add("invalid");
      errorIcon.classList.add("invalid");
      errorText.classList.add("invalid");
      allValid = false;

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

document.querySelectorAll(".input").forEach((input) => {
  input.addEventListener("input", function () {
    if (this.classList.contains("invalid")) {
      this.classList.remove("invalid");
      this.nextElementSibling.classList.remove("invalid");
      this.nextElementSibling.nextElementSibling.classList.remove("invalid");
      resetPlaceholder(this);
    }
  });
});
