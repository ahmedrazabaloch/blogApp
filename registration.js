// >>>>>> SingUp & Login page <<<<<<

var singUpName = document.getElementById("signUpName"),
  singUpEmail = document.getElementById("signUpEmail"),
  singUpPass = document.getElementById("signUpPass"),
  singUpRePass = document.getElementById("signUpRePass");
var emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var passRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

// >>>>>> Set Data in localStorage & SingUp <<<<<<

function UserRegister() {
  //  >>>>>> form Validition <<<<<<
  if (singUpName.value.trim() === "") {
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: true,
    });
    Toast.fire({
      icon: "error",
      title: "<h2>Please enter your name<br/> in the username field.</h2>",
    });
  } else if (singUpEmail.value.trim() === "") {
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: true,
    });
    Toast.fire({
      icon: "error",
      title: "<h2>Please enter your email<br/>address in the email field.</h2>",
    });
  } else if (!emailRegex.test(singUpEmail.value)) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: true,
    });
    Toast.fire({
      icon: "error",
      title: "<h2>Please enter a valid Email</h2>",
    });
  } else if (singUpPass.value.trim() === "") {
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: true,
    });
    Toast.fire({
      icon: "error",
      title: "<h2>Please enter a password<br/>in the password field.</h2>",
    });
  } else if (!passRegex.test(singUpPass.value)) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: true,
    });
    Toast.fire({
      icon: "error",
      title:
        "Password must be a minimum of 6 characters <br/> and a maximum of 16 characters",
    });
  } else if (singUpRePass.value.trim() === "") {
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: true,
    });
    Toast.fire({
      icon: "error",
      title:
        "<h2>Please re-enter your password in <br/> the 'Repeat Password' field.</h2>",
    });
  } else if (singUpPass.value !== singUpRePass.value) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: true,
    });
    Toast.fire({
      icon: "error",
      title: "The passwords you entered don't match",
    });
  } else {
    // >>>>>> localStorage Data <<<<<<
    var getDatalocal = JSON.parse(localStorage.getItem("signupUser")) || [];

    var signupUser = {
      singUpName: singUpName.value,
      singUpEmail: singUpEmail.value,
      singUpPass: singUpPass.value,
      singUpRePass: singUpRePass.value,
    };

    getDatalocal.push(signupUser);
    localStorage.setItem("signupUser", JSON.stringify(getDatalocal));

    // >>>>>> redirect to other page <<<<<<
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    Toast.fire({
      icon: "success",
      title: "Signed in successfully",
    });
    setTimeout(() => {
      location.href = "index.html";
    }, 2000);
  }
}
function member() {
  location.href = "index.html";
}

// >>>>>> login page <<<<<<

var logInEmail = document.getElementById("logInEmail"),
  logInpassword = document.getElementById("logInpassword");

function userLogIn() {
  // Get user data from local storage
  var getDatalocal = JSON.parse(localStorage.getItem("signupUser")) || [];
  var logInEmail = document.getElementById("logInEmail").value; // Get the input value
  var logInpassword = document.getElementById("logInpassword").value;

  var email = getDatalocal.find(function (userData) {
    return userData.singUpEmail === logInEmail;
  });

  var password = getDatalocal.find(function (userData) {
    return userData.singUpPass === logInpassword;
  });

  var username = getDatalocal.find(function (userData) {
    return userData.singUpName;
  });
  if (!logInEmail.trim()) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: true,
    });
    Toast.fire({
      icon: "error",
      title: "<h2>Please enter your email address in the email field.</h2>",
    });
  } else if (!email) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: true,
    });
    Toast.fire({
      icon: "error",
      title: "<h2>Please enter a valid Email</h2>",
    });
  } else if (!password) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: true,
    });
    Toast.fire({
      icon: "error",
      title: "<h2>Please enter a valid password</h2>",
    });
  } else {
    // >>>>>> redirect to other page <<<<<<
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    Toast.fire({
      icon: "success",
      title: "Welcome to Blog post ",
    });
    setTimeout(() => {
      location.href = "main.html";
    }, 2000);
  }
}

function singUpPage() {
  location.href = "signup.html";
}
