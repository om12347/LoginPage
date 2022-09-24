function mysubmit(){
const email = document.getElementById('email')
const password = document.getElementById('password')

if(email.value == ""||email.value == null){
    document.getElementById("ferror").style.visibility = "visible";
    alert("Email is required");
    return false;
}
}
