async function createAccount(username, email, password) {
  let user = new Moralis.User();

  try {
    if (checkStatus(message))
    {
      user.set("username", username);
      user.set("password", password);
      user.set("email", email);
        
      await user.signUp();
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
  var isValid = true;

  passwordMessage.innerHTML = "";
  confirmPasswordMessage.innerHTML = "";

  if (password.length < 8) {
    passwordMessage.innerHTML = "Password must be longer than 7 characters";
    isValid = false;
  } else if (password !== confirmPassword) {
    confirmPasswordMessage.innerHTML = "Password and Confirm Password fields do not match";
    isValid = false;
  }

  return isValid;
}

async function updateAgreeToTermsMessage() {
  var termsAndConditionsChecked = document.getElementById("terms-&-conditions-checkbox").checked;
  var termsAndConditions = document.getElementById("terms-&-conditions-message-label");
  var isValid = true;

  termsAndConditions.innerHTML = "";

  if (!termsAndConditionsChecked)
  {
    termsAndConditions.innerHTML = "You must accept the Terms & Conditions to create an account";
    isValid = false;
  }

  return isValid;
}

async function checkStatus(message) {
  var isValid = true;

  clearMessages();
  isValid = isValid & updateUsernameMessage(message);
  isValid = isValid & updateEmailMessage();
  isValid = isValid & updatePasswordMessage();
  isValid = isValid & updateAgreeToTermsMessage();
  console.log(isValid);

  return isValid;
}

async function clearMessages()
{
  document.getElementById("username-message-label").innerHTML = "";
  document.getElementById("email-message-label").innerHTML = "";
  document.getElementById("password-message-label").innerHTML = "";
  document.getElementById("confirm-password-message-label").innerHTML = "";
}

document.getElementById("create-account-button").onclick = () => createAccount(document.getElementById("username-field").value, document.getElementById("email-field").value, document.getElementById("password-field").value);
