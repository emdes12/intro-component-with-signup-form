const inpFirstName = document.querySelector("#first-name");
const inpLastName = document.querySelector("#last-name");
const emailInp = document.querySelector("#email");
const passWordInp = document.querySelector("#password");
const submitBtn = document.querySelector("#submit-btn");

function validate() {
  var regExEmail =
    /^([a-zA-Z0-9_\-\.])+\@([a-zA-Z0-9_\-\.])+\.([a-zA-z]{2,4})$/;

  if (emailInp.value.match(regExEmail)) {
    console.log("Yes");
    emailInp.parentElement.classList.remove("error");
  } else {
    emailInp.parentElement.classList.add("error");
    console.log("No");
  }
}

submitBtn.addEventListener("click", () => {
  //   if (inpFirstName.value) {
  //     inpFirstName.parentElement.classList.add("error");
  //   } else if (inpLastName.value) {
  //     inpLastName.parentElement.classList.add("error");
  //   } else if (passWordInp.value) {
  //     passWordInp.parentElement.classList.add("error");
  //   } else {
  //     console.log(" good");
  //   }

  let inputs = [inpFirstName, inpLastName, passWordInp];

  inputs.map((input) => {
    if (input.value === "") {
      input.parentElement.classList.add("error");
    } else {
      input.parentElement.classList.remove("error");
    }
  });
  validate();
});
