async function createAccount(username, email, password) {
  try {
    if (checkStatus(message))
    {
      user.set("username", username);
      user.set("password", password);
      user.set("email", email);
        
      await User.signUp();
      window.location.href = "home.html";
    }
  }
  catch (error) {
    checkStatus(error.message);
  }
}

async function updatePasswordMessage() {
  var password = document.getElementById("password-field").value;
  var passwordMessage = document.getElementById("password-message-label");
  var confirmPassword = document.getElementById("confirm-password-field").value;
  var confirmPasswordMessage = document.getElementById("confirm-password-message-label");

  passwordMessage.innerHTML = "";
  confirmPasswordMessage.innerHTML = "";

  if (password.length < 8) {
    passwordMessage.innerHTML = "Password must be longer than 7 characters";
  } else if (password !== confirmPassword) {
    confirmPasswordMessage.innerHTML = "Password and Confirm Password fields do not match";
  }
}

async function updateAgreeToTermsMessage() {
  var termsAndConditionsChecked = document.getElementById("terms-&-conditions-checkbox").checked;
  var termsAndConditions = document.getElementById("terms-&-conditions-message-label");

  termsAndConditions.innerHTML = "";

  if (!termsAndConditionsChecked) {
    termsAndConditions.innerHTML = "You must accept the Terms & Conditions to create an account";
  }
}

async function checkStatus(message) {
  clearMessages();

  updateUsernameMessage(message) && updateEmailMessage(message) && updatePasswordMessage() && updateAgreeToTermsMessage();

  return document.getElementById("username-message-label").innerHTML == "" &&
         document.getElementById("email-message-label").innerHTML == "" &&
         document.getElementById("password-message-label").innerHTML == "" &&
         document.getElementById("confirm-password-message-label").innerHTML == "" &&
         document.getElementById("terms-&-conditions-message-label").innerHTML == "" &&
         document.getElementById("terms-&-conditions-checkbox").checked;
}

async function clearMessages()
{
  document.getElementById("username-message-label").innerHTML = "";
  document.getElementById("email-message-label").innerHTML = "";
  document.getElementById("password-message-label").innerHTML = "";
  document.getElementById("confirm-password-message-label").innerHTML = "";
  document.getElementById("terms-&-conditions-message-label").innerHTML = "";
}

document.getElementById("create-account-button").onclick = () => createAccount(document.getElementById("username-field").value, document.getElementById("email-field").value, document.getElementById("password-field").value);