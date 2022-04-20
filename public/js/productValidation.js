window.addEventListener('load', () => {
    const nameInput = document.querySelector('input[name=name]');
    const descriptionInput = document.querySelector('input[name=description]');
    const priceInput = document.querySelector('input[name=price]');
    const userForm = document.getElementById('userForm');
    const spanErrorSubmit = document.getElementById('spanErrorSubmit');
    const inputFile = document.getElementById('input-file');
    const validForm = {
        nameInput: false,
        descriptionInput: false,
        priceInput: false,
        inputFile: false
    }

    nameInput.addEventListener('blur', () => {
        if (nameInput.value.trim() == '') {
            nameInput.classList.add('invalidInput');
            nameInput.nextElementSibling.classList.add ('span-err');
            nameInput.nextElementSibling.innerText = "Ingrese el Nombre de producto"
        }
        else if (nameInput.value.length < 5) {
            nameInput.classList.add('invalidInput');
            nameInput.nextElementSibling.classList.add ('span-err');
            nameInput.nextElementSibling.innerText = "El nombre del Producto debe tener al menos 5 caracteres"
        }
        else {
            nameInput.classList.remove('invalidInput');
            nameInput.classList.add('validInput');
            nameInput.nextElementSibling.innerText = '';
            validForm.nameInput = true;
        }
    });
    
    descriptionInput.addEventListener('blur', () => {
        if (descriptionInput.value.trim() == '') {
            descriptionInput.classList.add('invalidInput');
            descriptionInput.nextElementSibling.classList.add ('span-err');
            descriptionInput.nextElementSibling.style.display = 'block';
            descriptionInput.nextElementSibling.innerText = "Ingrese una Descripcion del producto"
        } else if (descriptionInput.value.length < 20) {
            descriptionInput.classList.add('invalidInput');
            descriptionInput.nextElementSibling.innerText = "La descripcion del Producto debe tener al menos 20 caracteres"
        }
        else {
            descriptionInput.classList.remove('invalidInput');
            descriptionInput.classList.add('validInput');
            descriptionInput.nextElementSibling.classList.add ('span-err');
            descriptionInput.nextElementSibling.innerText = '';
            validForm.descriptionInput = true;
        }
    });
    priceInput.addEventListener('input', () => {
        if (isNaN(priceInput.value)) {
            priceInput.classList.add('invalidInput');
            priceInput.nextElementSibling.classList.add ('span-err');
            priceInput.nextElementSibling.innerText = "Ingrese solo numeros"
        }
        else if (priceInput.value.trim() == '') {
            priceInput.classList.add('invalidInput');
            priceInput.nextElementSibling.classList.add ('span-err');
            priceInput.nextElementSibling.innerText = "Ingrese el precio del producto"
        }
        else {
            priceInput.classList.remove('invalidInput');
            priceInput.classList.add('validInput');
            priceInput.nextElementSibling.innerText = '';
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

    inputFile.addEventListener('change', () => {
        const inputValue = inputFile.value;
        const allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
        if (!allowedExtensions.exec(inputValue)) {
            inputFile.nextElementSibling.classList.add ('span-err');
            inputFile.nextElementSibling.innerText = 'Extensión no permitida. Utiliza: .jpeg/.jpg/.png/.gif.'
        } else {
            inputFile.nextElementSibling.innerText = ""
            validForm.inputFile = true;
        }
    })

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        validationInput();
    })
})
