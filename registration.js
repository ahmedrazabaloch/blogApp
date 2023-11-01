// SingUp page

var singUpName = document.getElementById("signUpName"),
  singUpEmail = document.getElementById("signUpEmail"),
  singUpPass = document.getElementById("signUpPass"),
  singUpRePass = document.getElementById("signUpRePass");

// Set Data in localStorage

function UserRegister() {
if(singUpName.value.trim() === ""){
  alert("please enter a valid name")
}  

  // localStorage Data
  
  var getDatalocal = JSON.parse(localStorage.getItem("signupUser")) || [];

  var signupUser = {
    singUpName: singUpName.value,
    singUpEmail: singUpEmail.value,
    singUpPass: singUpPass.value,
    singUpRePass: singUpRePass.value,
  };

  getDatalocal.push(signupUser);

  localStorage.setItem("signupUser", JSON.stringify(getDatalocal));
}
