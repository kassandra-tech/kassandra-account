async function createAccount(username, email, password, confirmPassword) {
  let user = new Moralis.User();

  try {
    verifyInformation(username, email, password, confirmPassword);

    if (!!message) {
      alert(message);
      message = "";
    }
    else {
      console.log(user);
      user.set("username", username);
      user.set("password", password);
      user.set("email", email);
      
      await user.signUp();    
      alert("Thank you for creating an account");  
    }
  }
  catch (error) {
    alert("Error: " + error.code + " " + error.message);
  }
}
  
  document.getElementById("create-account-button").onclick = () => createAccount(document.getElementById("username-field").value, document.getElementById("email-field").value, document.getElementById("password-field").value, document.getElementById("confirm-password-field").value);
