var scrollUpBtn = document.getElementById("scrollUpBtn");


window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
});


scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


function validatePassword(){
var verifyPassword = document.getElementById("password").value;
var verifyConfirmPassword = document.getElementById("confirmPassword").value;

  if(verifyPassword == "" || verifyConfirmPassword == ""){
    prompt("Your Password must not be empty");
  }
  else if(verifyPassword.length <=8 && verifyConfirmPassword.length <=8){
    prompt("Your Password must be at least eight (8) characters");
  }
  else if(verifyPassword !== verifyConfirmPassword){
    prompt("Password does not match");
  }else{
    prompt("Correct you can continue");
  }
 
   


}

