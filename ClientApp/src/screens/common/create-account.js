async function createAccount(username, email, password) {
  let user = new Moralis.User();

  try {
    checkStatus(message);

    user.set("username", username);
    user.set("password", password);
    user.set("email", email);
      
    await user.signUp();    
    window.location.href = "../home/home.html"; 
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

async function checkStatus(message) {
  clearMessages();
  updateUsernameMessage(message);
  updateEmailMessage();
  updatePasswordMessage();
}

async function clearMessages()
{
  document.getElementById("username-message-label").innerHTML = "";
  document.getElementById("email-message-label").innerHTML = "";
  document.getElementById("password-message-label").innerHTML = "";
  document.getElementById("confirm-password-message-label").innerHTML = "";
}

document.getElementById("create-account-button").onclick = () => createAccount(document.getElementById("username-field").value, document.getElementById("email-field").value, document.getElementById("password-field").value);
