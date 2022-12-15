const showErrorInInputInvalid = (input, object) => {
  const error = document.querySelector(`#${input.id}-error`)
  if (input.validity.valid) {
    input.classList.remove(object.inputErrorClass);
  } else {
    error.classList.add(object.errorClass);
    input.classList.add(object.inputErrorClass);
  }
}

const clearInputError = (input) => {
  const error = document.querySelector(`#${input.id}-error`)
  if (input.validity.valid) {
    error.textContent = '';
  } else {
    error.textContent = input.validationMessage;
  }
}

const disabledButton = (inputs, button, object) => {

  if (inputs.some(input => !input.validity.valid) === true) {
    button.classList.add(object.inactiveButtonClass);
    button.disabled = true;
  } else {
    button.classList.remove(object.inactiveButtonClass);
    button.disabled = false;
  }
}

const enableValidation = (object) => {
  const forms = Array.from(document.querySelectorAll(object.formSelector));
  forms.forEach(form => {
    const inputs = Array.from(form.querySelectorAll(object.inputSelector));
    const button = form.querySelector(object.submitButtonSelector);
  
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        showErrorInInputInvalid(input, object);
        clearInputError(input);
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