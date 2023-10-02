// for hide and show password
console.log("hellow");
const togglePassword = document.getElementById('togglePassword');
console.log(togglePassword);
togglePassword.onclick= function() {
    var passwordInput = document.getElementById('password');
    var icon = this;

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
};

// for new page open on submit
function cominSoon(){
window.location.href = 'comingsoonpage.html';
} 