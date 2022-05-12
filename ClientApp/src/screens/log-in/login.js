Moralis.start({ serverUrl, appId });

async function login(username, password) {
  try {
    const user = await Moralis.User.logIn(username, password);
    alert("You are logged in");
  } catch (error) {
    alert("Error: " + error.code + " " + error.message);
  }
}

document.getElementById("submit-button").onclick = () => login(document.getElementById("username-field").value, document.getElementById("password-field").value);
