const isValid = (input, form, object) => {
  if (input.validity.valid) {
    hideInputError(input, form, object);
  } else {
    showInputError(input, form, object);
  }
}

const showInputError = (input, form, object) => {
  const error = form.querySelector(`#${input.id}-error`)
  input.classList.add(object.inputErrorClass);
  error.textContent = input.validationMessage;
}

const hideInputError = (input, form, object) => {
  const error = form.querySelector(`#${input.id}-error`)
  error.textContent = '';
  input.classList.remove(object.inputErrorClass);
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
        isValid(input, form, object);
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