window.addEventListener('load', () => {
    const userForm = document.querySelector('#userForm')
    const emailInput = document.querySelector('[name=email]')
    const passwordInput = document.querySelector('[name=password]');
    const iconPassword = document.querySelector('#iconPassword');
    
    function validateEmail (e) {
        const field = e.target;
        const spanError = field.nextElementSibling;
        console.log (spanError)
        const email = emailInput.value;
        const er = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,20})$/
        if (!er.test(email)){
            spanError.innerText = 'Ingresa un email valido';
            field.classList.add("invalidInput")
        }else{
            spanError.innerText = '';
            field.classList.remove("invalidInput");
            field.classList.add("validInput");
        }
        if (email.trim() === '') {
            spanError.innerText = `El campo ${field.name} es obligatorio`;
        }
    }
    function validatePass (e) {
        const field = e.target;
        const divError = field.nextElementSibling;
        console.log (divError)
        const password = passwordInput.value;
        const er = /^[a-z0-9_-]{8,15}$/
        if(!er.test(password)) {
            divError.innerText = 'Ingresa una contraseña de 8 a 15 caracteres';
            divError.style.color = 'red'
            divError.style.textAlign = 'left'
            field.classList.add("invalidInput")
        }else{
            divError.innerText = '';
            field.classList.remove("invalidInput");
            field.classList.add("validInput");
        }
        if(password.trim() === '') {
            divError.innerText = `El campo ${field.name} es obligatorio`;
        }

    }

    emailInput.addEventListener ('blur', validateEmail);
    passwordInput.addEventListener ('blur', validatePass);

    userForm.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log ('el formulario no se envia');
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








