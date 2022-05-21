async function forgotPassword(username, email, password) {
  let user = new Moralis.User();

  try {
    if (checkStatus())
    {
        // TODO: Implement with Moralis
    }
  }
  catch (error) {
    checkStatus(error.message);
  }
}

async function checkStatus(message) {
  clearMessages();

  updateUsernameMessage(message);
  updateEmailMessage(message);

  return document.getElementById("username-message-label").innerHTML == "" &&
         document.getElementById("email-message-label").innerHTML == "";
}

async function clearMessages() {
  document.getElementById("username-message-label").innerHTML = "";
  document.getElementById("email-message-label").innerHTML = "";
}

document.getElementById("submit-button").onclick = () => forgotPassword();