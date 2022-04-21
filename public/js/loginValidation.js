window.addEventListener('load', () => {
    const userForm = document.querySelector('#userForm')
    const emailInput = document.querySelector('[name=email]')
    const passwordInput = document.querySelector('[name=password]');
    const spanErrorSubmit = document.getElementById('spanErrorSubmit');
    const validForm = {
        emailInput: false,
        passInput: false
    }
    
    function validateEmail (e) {
        const field = e.target;
        const spanError = field.nextElementSibling;
        console.log (spanError)
        const email = emailInput.value;
        const er = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,20})$/
        if (!er.test(email)){
            spanError.innerText = 'Ingresa un email valido';
            spanError.style.color = 'red';
            spanError.style.padding = '5px 0px 5px 0px';
            spanError.style.textAlign = 'left';
            field.classList.add("invalidInput")
        }else{
            spanError.innerText = '';
            field.classList.remove("invalidInput");
            field.classList.add("validInput");
            validForm.emailInput = true;
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
            divError.style.padding = '5px 0px 5px 0px';
            divError.style.textAlign = 'left'
            field.classList.add("invalidInput")
        }else{
            divError.innerText = '';
            field.classList.remove("invalidInput");
            field.classList.add("validInput");
            validForm.passInput = true;
        }
        if(password.trim() === '') {
            divError.innerText = `El campo ${field.name} es obligatorio`;
        }

    }

    const validationInput = () => {
        const objectToArray = Object.values(validForm)
        const validationObject = objectToArray.findIndex(item => item == false);
        if (validationObject == -1) {
            userForm.submit()
        } else {
            spanErrorSubmit.innerText = 'Complete el formulario correctamente';
            spanErrorSubmit.style.color = 'red';
        }
    }

    emailInput.addEventListener ('blur', validateEmail);
    passwordInput.addEventListener ('blur', validatePass);

    // userForm.addEventListener('submit', (e) => {
    //     e.preventDefault()
    //     console.log ('el formulario no se envia');
    //     if(!emailInput.value.trim() == '' && !passwordInput.value.trim() == '') {
    //         userForm.submit()
    //     }
    // })
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        validationInput();
    });
})








