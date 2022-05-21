Moralis.start({ serverUrl, appId });

async function login(username, password) {
  try {
    if (await checkStatus())
    {
      await Moralis.User.logIn(username, password);
      window.location.href = "home.html";
    }
  } catch (error) {
    checkStatus(error.message);
  }
}

async function togglePassword() {
  var field = document.getElementById("password-field");
  var passwordButton = document.getElementById("show-password-state-button");

  if (field.type === "password") {
    field.type = "text";
    passwordButton.innerText = "HIDE";
  } else {
    field.type = "password";
    passwordButton.innerText = "SHOW";
  }
}

async function updatePasswordMessage() {
  var password = document.getElementById("password-field").value;
  var passwordMessage = document.getElementById("password-message-label");

  passwordMessage.innerHTML = "";

  if (password.length < 8) {
    passwordMessage.innerHTML = "Password must be longer than 7 characters";
  }
}

async function checkStatus(message) {
  clearMessages();
  updateUsernameMessage(message);
  updatePasswordMessage();

  return document.getElementById("username-message-label").innerHTML == "" &&
  document.getElementById("password-message-label").innerHTML == "";
}

async function clearMessages()
{
  document.getElementById("username-message-label").innerHTML = "";
  document.getElementById("password-message-label").innerHTML = "";
}

document.getElementById("submit-button").onclick = () => login(document.getElementById("username-field").value, document.getElementById("password-field").value);
