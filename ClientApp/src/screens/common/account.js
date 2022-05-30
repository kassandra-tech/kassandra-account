const serverUrl = "https://dqywxuqq3yjn.usemoralis.com:2053/server";
const appId = "QHKl8mDT6Uaw7D6RMJIzgSpiAqksNBLO0OPLECN5";

let message = "";

Moralis.start({ serverUrl, appId });

var User = Moralis.User.current();

async function createAccountPhantom() {
    User = new Moralis.User();

    if (!User.user) {
        User = await Moralis.authenticate({
        type: "sol",
        signingMessage: "Log in with Phantom",
      })
        .then(function (User) {
          console.log("user logged in:", User);
          console.log(User.get("solAddress"));
        })
        .catch(function (error) {
          if (error.message == "User rejected the request.") {
            logOut();
          }
          else if (error.message == "Phantom wallet not available") {
            alert("Phantom wallet is not installed")
          }
          else {
            console.log(error);
          }
        });
    }
  }

  async function togglePassword() {
    var field = document.getElementById("password-field");
    var confirmField = document.getElementById("confirm-password-field");
    var passwordButton = document.getElementById("password-button");

    if (field.type === "password") {
      field.type = "text";
      confirmField.type = "text";
      passwordButton.innerText = "HIDE";
    } else {
      field.type = "password";
      confirmField.type = "password"
      passwordButton.innerText = "SHOW";
    }
  }

  async function updateUsernameMessage(message) {
    var username = document.getElementById("username-field").value;
    var usernameMessage = document.getElementById("username-message-label");

    usernameMessage.innerHTML = "";

    if (username.length == 0) {
      usernameMessage.innerHTML = "Username is required to use Kassandra";
    } else if (username.length > 0 && username.length < 5) {
      usernameMessage.innerHTML = "Username must be longer than 4 characters";
    } else if (message == "Account already exists for this username.") {
      usernameMessage.innerHTML = "This username has already been registered";
    }
  }

  async function updateEmailMessage(message) {
    var email = document.getElementById("email-field").value;
    var emailMessage = document.getElementById("email-message-label");

    emailMessage.innerHTML = "";

    if (email.length == 0) {
      emailMessage.innerHTML = "Email address is required";
    } else if (email.length < 6 || email.indexOf("@") == -1 || email.indexOf(".") == -1) {
      emailMessage.innerHTML = "Email address format is invalid";
    } else if (message == "Account already exists for this email address.") {
      emailMessage.innerHTML = "Account already exists for this email address";
    }
  }

  async function logOut() {
    console.log("Logged out");
    localStorage.clear();
    await Moralis.User.logOut()
  }
