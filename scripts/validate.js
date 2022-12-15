const showErrorInInputInvalid = (input, object) => {
  const error = document.querySelector(`#${input.id}-error`)
  if (input.validity.valid) {
    error.textContent = '';
    error.classList.remove(object.errorClass);
    input.classList.remove(object.inputErrorClass);
  } else {
    error.textContent = input.validationMessage;
    error.classList.add(object.errorClass);
    input.classList.add(object.inputErrorClass);
  }
}

const disabledButton = (inputs, button, object) => {
  const inputIsInvalid = inputs.some(input => !input.validity.valid);

  if (inputIsInvalid) {
    console.log('задизейблить');
    button.classList.add(object.inactiveButtonClass);
    button.disabled = true;
  } else {
    console.log('раздизейблить');
    button.classList.remove(object.inactiveButtonClass);
    button.disabled = false;
  }
}

const enableValidation = (object) => {
  const forms = Array.from(document.querySelectorAll(object.formSelector));
  forms.forEach(form => {
    const inputs = Array.from(form.querySelectorAll(object.inputSelector));
    const button = form.querySelector(object.submitButtonSelector);
  
    form.addEventListener('submit', (e) => {
      e.preventDefault()
    })
  
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        showErrorInInputInvalid(input, object);
        disabledButton(inputs, button, object);
      });
    })
  })
}

enableValidation({
  formSelector: '.popup__content',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error'
}); 
