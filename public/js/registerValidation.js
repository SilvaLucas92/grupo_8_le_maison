window.addEventListener('load', () => {
    const userForm = document.querySelector('#userForm')
    const nameInput = document.querySelector('[name=name]');
    const emailInput = document.querySelector('[name=email]')
    const passwordInput = document.querySelector('[name=password]');
    const iconPassword = document.querySelector('#iconPassword');
    
    function validateName (e) {
        const field = e.target;
        const spanError = field.nextElementSibling;
        console.log (spanError)
        const name = nameInput.value;
        const er =  /^[A-z0-9_-]{2,10}$/;
        if (!er.test(name)){
            spanError.innerText = `El campo ${field.name} debe tener minimo 2 caracteres`;
        }else{
            spanError.innerText = ''
        }
        if (name.trim()=== ''){
            spanError.innerText = `El campo ${field.name} es obligatorio`;
        }
    }
    function validateEmail (e) {
        const field = e.target;
        const spanError = field.nextElementSibling;
        console.log (spanError)
        const email = emailInput.value;
        const er = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,20})$/
        if (!er.test(email)){
            spanError.innerText = 'Ingresa un email valido';
        }else{
            spanError.innerText = '';
        }
        if (email.trim() === '') {
            spanError.innerText = `El campo ${field.name} es obligatorio`;
        }
    }
    function validatePass (e) {
        const field = e.target;
        const spanError = field.nextElementSibling;
        console.log (spanError)
        const password = passwordInput.value;
        const er = /^[a-z0-9_-]{8,18}$/
        if(!er.test(password)) {
            spanError.innerText = `El campo ${field.name} es obligatorio`;
            spanError.style.color = 'red'
        }else{
            spanError.innerText = '';
        }

    }

    nameInput.addEventListener ('blur', validateName) ;
    emailInput.addEventListener ('blur', validateEmail);
    passwordInput.addEventListener ('blur', validatePass);

    userForm.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log ('el formulario no se envia')
    })

    //Evento del icono pas
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
    })
})
    