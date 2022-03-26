window.addEventListener('load', () => {
    const passwordInput = document.querySelector('input[name=password]');
    const iconPassword = document.querySelector('#iconPassword');
    iconPassword.addEventListener('click', () => {
        if (passwordInput.type == "password") { 
            iconPassword.classList.remove("fa-eye-slash");
            iconPassword.classList.add("fa-solid");
            iconPassword.classList.add("fa-eye");
            passwordInput.type = "text"
        } else {
            iconPassword.classList.remove("fa-solid");
            iconPassword.classList.remove("fa-eye");
            iconPassword.classList.add('fa-eye-slash');
            passwordInput.type = "password"
        }
})})




