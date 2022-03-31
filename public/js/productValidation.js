window.addEventListener('load', () => {
    const nameInput = document.querySelector('input[name=name]');
    const descriptionInput = document.querySelector('input[name=description]');
    const priceInput = document.querySelector('input[name=price]');
    const spanErrorName =document.getElementById('spanErrorName');
    const spanErrorDescription =document.getElementById('spanErrorDescription');
    const spanErrorPrice =document.getElementById('spanErrorPrice');
    const userForm = document.getElementById('userForm');
    const spanErrorSubmit = document.getElementById('spanErrorSubmit');
    const validForm = {
        nameInput: false,
        descriptionInput: false,
        priceInput: false
    }

    nameInput.addEventListener('blur', () => {
        if (nameInput.value.trim() == '') {
            nameInput.classList.add('invalidInput');
            spanErrorName.innerText = "Ingrese el Nombre de producto"
        }
        else if (nameInput.value.length < 5) {
            nameInput.classList.add('invalidInput');
            spanErrorName.innerText = "El nombre del Producto debe tener al menos 5 caracteres"
        }
        else {
            nameInput.classList.remove('invalidInput');
            nameInput.classList.add('validInput');
            spanErrorName.innerText = '';
            validForm.nameInput = true;
        }
    });
    descriptionInput.addEventListener('blur', () => {
        if (descriptionInput.value.trim() == '') {
            descriptionInput.classList.add('invalidInput');
            spanErrorDescription.innerText = "Ingrese el Nombre de producto"
        } else if (descriptionInput.value.length < 20) {
            descriptionInput.classList.add('invalidInput');
            spanErrorDescription.innerText = "La descripcion del Producto debe tener al menos 20 caracteres"
        }
        else {
            descriptionInput.classList.remove('invalidInput');
            descriptionInput.classList.add('validInput');
            spanErrorDescription.innerText = '';
            validForm.descriptionInput = true;
        }
    });
    priceInput.addEventListener('input', () => {
        if (isNaN(priceInput.value)) {
            priceInput.classList.add('invalidInput');
            spanErrorPrice.innerText = "Ingrese solo numeros"
        }
        else {
            priceInput.classList.remove('invalidInput');
            priceInput.classList.add('validInput');
            spanErrorPrice.innerText = '';
            validForm.priceInput = true;
        }
    });

    const validationInput = () => {
        const objectToArray = Object.values(validForm)
        const validationObject = objectToArray.findIndex(item => item == false);
        if (validationObject == -1) {
            userForm.submit()
        } else {
            spanErrorSubmit.innerText = 'Complete el formulario correctamente'
        }
    }

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        validationInput();
    })
})