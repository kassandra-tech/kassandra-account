Moralis.start({ serverUrl, appId });

async function login(username, password) {
  try {
    await Moralis.User.logIn(username, password);
    checkStatus(message);
    window.location.href = "../home/home.html";
  } catch (error) {
    checkStatus(message);
  }
}

async function updatePasswordMessage() {
  var password = document.getElementById("password-field").value;
  var passwordMessage = document.getElementById("password-message-label");

  passwordMessage.innerHTML = "";

  if (password.length > 0 && password.length < 8) {
    passwordMessage.innerHTML = "Password must be longer than 7 characters";
  }
}

async function checkStatus(message) {
  clearMessages();
  updateUsernameMessage(message);
  updatePasswordMessage();
}

async function clearMessages()
{
  document.getElementById("username-message-label").innerHTML = "";
  document.getElementById("password-message-label").innerHTML = "";
}

document.getElementById("submit-button").onclick = () => login(document.getElementById("username-field").value, document.getElementById("password-field").value);
