const inputIsInvalid = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

const makeColoredInputInvalid = (input, object) => {
  if (inputIsInvalid) {
    input.classList.add(object.inputErrorClass);
  }
}

const removeColorInputInvalid = (input, object) => {
  if (!inputIsInvalid) {
    input.classList.remove(object.inputErrorClass);
  }
}

const showInputError = (input) => {
  const error = document.querySelector(`#${input.id}-error`)
  if (inputIsInvalid) {
    error.textContent = input.validationMessage;
  }
}

const clearInputError = (input) => {
  const error = document.querySelector(`#${input.id}-error`)
  if (!inputIsInvalid) {
    error.textContent = '';
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
        makeColoredInputInvalid(input, object);
        removeColorInputInvalid(input, object);
        clearInputError(input);
        showInputError(input);
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