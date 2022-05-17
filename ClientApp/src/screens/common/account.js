const serverUrl = "https://fpzorscs0k7g.usemoralis.com:2053/server";
const appId = "hx2JcEqU7eY7ADlbBh1Zkfex4piOrOg83IcUM3nE";

let message = "";

Moralis.start({ serverUrl, appId });

async function createAccountPhantom() {
    let user = new Moralis.User();
    console.log(user.user);
    if (!user.user) {
        user = await Moralis.authenticate({
        type: "sol",
        signingMessage: "Log in with Phantom",
      })
        .then(function (user) {
          console.log("user logged in:", user);
          console.log(user.get("solAddress"));
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
  
  async function verifyInformation(username, email, password, confirmPassword) {
    if (username.length < 5) {
      
      message = "Username must be longer than 4 characters \n";
    }

    if (email === null) {
      message = message + "Email address is required \n";
    }

    if (password.length < 8) {
      message = message + "Password must be longer than 7 characters \n";
    }

    if (confirmPassword < 8 || password !== confirmPassword) {
      message = message + "Password and Confirm Password fields do not match";
    }

    return message;
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

  async function updateEmailMessage() {
    var email = document.getElementById("email-field").value;
    var emailMessage = document.getElementById("email-message-label");

    emailMessage.innerHTML = "";

    if (email.length == 0) {
      emailMessage.innerHTML = "Email address is required";
    } else if (email.length < 6 || email.indexOf("@") == -1 || email.indexOf(".") == -1) {
      emailMessage.innerHTML = "Email address format is invalid";
    }
  }

  async function logOut() {
    console.log("Logged out");
    localStorage.clear();
    await Moralis.User.logOut()
  }
