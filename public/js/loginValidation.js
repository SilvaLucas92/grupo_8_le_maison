window.addEventListener('load', () => {
    const passwordInput = document.querySelector('input[name=password]');
    const iconPassword = document.querySelector('#iconPassword');
    const emailInput = document.querySelector("[name=email]");
    const userForm = document.querySelector('#userForm');
    const spanErrorEmail = document.getElementById('spanErrorEmail');
    const spanErrorPassword = document.getElementById('spanErrorPassword');
    const spanErrorSubmit = document.getElementById('spanErrorSubmit');

    const validForm = {
        emailInput: false,
        passwordInput: false
    };

    emailInput.addEventListener('blur', () => {
        if(emailInput.value.trim() == '') {
            emailInput.classList.add('invalidInput');
            spanErrorEmail.innerText = 'Ingrese su email'
        }
        else {
            emailInput.classList.remove('invalidInput');
            emailInput.classList.add("validInput");
            spanErrorEmail.innerText = '';
            validForm.emailInput = true;
        }
    });
    
    passwordInput.addEventListener('blur', () => {
        if(passwordInput.value.trim() == '') {
            passwordInput.classList.add('invalidInput');
            spanErrorPassword.innerText = 'Ingrese una contraseña'
        } else if (passwordInput.value.length < 6){
            spanErrorPassword.innerText = 'La contraseña debe tener al menos 8 caracteres'
            passwordInput.classList.add('invalidInput');
        } else {
            passwordInput.classList.remove('invalidInput');
            passwordInput.classList.add("validInput");
            spanErrorPassword.innerText = '';
            validForm.passwordInput = true    
            console.log(validForm)
        }
    });

    const validateInput = () => {
        const valuesToArray = Object.values(validForm);
        const inputCheck = valuesToArray.findIndex(item => item == false);
        if (inputCheck == -1) {
            userForm.submit()
        } else {
            spanErrorSubmit.innerText = 'Complete correctamente el formulario'
        }
    }
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        validateInput();
    })

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




