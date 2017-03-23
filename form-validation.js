//---------- global variables (can be used in all functions) ----------------
var userEntered;
var passEntered;

//--------------------------- alert function --------------------------------
function register(){
  alert("Username: " + userEntered + " \nPassword: " + passEntered);
}

//------------------------ Checking password -------------------------------
function validatePassword(){
  passEntered = document.getElementById("pass").value;
  if (passEntered.length < 6) {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password must have at least 6 characters!";
    passError();
  }
  else if (passEntered == userEntered) {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password Must not be the same as username!";
    passError();
  }
  else if (passEntered.toLowerCase() == "password") {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="The word -password- is NOT valid!";
    passError();
  }
  else if (passEntered.length > 20) {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password must have no more than 20 characters!";
    passError();
  }
  //ELSE password is VALID
  else {
    passSuccess();
  }
}

//------------------------ Checking username -------------------------------
function validateUsername(){
  userEntered = document.getElementById("user").value;
  if (userEntered.length < 6) {
    document.getElementById("usernameError").innerHTML="Username must have at least 6 characters!";
    userError();
  }
  else if (userEntered.search(" ") !== -1) {
    document.getElementById("usernameError").innerHTML="Username must not contain blanks!";
    userError();
  }
  //ELSE User is VALID
  else {
    userSuccess();
  }
}


//---------------------------Subroutines-----------------------------
function userError() {
  document.getElementById("usernameGroup").classList.remove("has-success");
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-error");
}

function passError() {
  document.getElementById("passwordGroup").classList.remove("has-success");
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
}

function passSuccess() {
  //Turn the username items green
  document.getElementById("passwordGroup").classList.remove("has-error");
  document.getElementById("passwordGroup").classList.add("has-success");
  //Hide the error message
  document.getElementById("passwordError").classList.remove("shown-message");
  document.getElementById("passwordError").classList.add("hidden-message");
}

function userSuccess() {
  //Turn the username items green
  document.getElementById("usernameGroup").classList.remove("has-error");
  document.getElementById("usernameGroup").classList.add("has-success");
  //Hide the error message
  document.getElementById("usernameError").classList.remove("shown-message");
  document.getElementById("usernameError").classList.add("hidden-message");
}
