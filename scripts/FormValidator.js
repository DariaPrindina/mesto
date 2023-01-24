export class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
  }

  enableValidation() {
    const inputs = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    const button = this._form.querySelector(this._config.submitButtonSelector);
    
    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._isValid(input);
        this._toggleButton(inputs, button);
      });
    })
  }

  _isValid = (input) => {
    if (input.validity.valid) {
      this._hideInputError(input);
    } else {
      this._showInputError(input);
    }
  }

  _showInputError = (input) => {
    const error = this._form.querySelector(`#${input.id}-error`)
    input.classList.add(this._config.inputErrorClass);
    error.textContent = input.validationMessage;
  }

  _hideInputError = (input) => {
    const error = this._form.querySelector(`#${input.id}-error`)
    error.textContent = '';
    input.classList.remove(this._config.inputErrorClass);
  }

  _toggleButton = (input, button) => {
    if (input.some(input => !input.validity.valid) === true) {
      button.classList.add(this._config.inactiveButtonClass);
      button.disabled = true;
    } else {
      button.classList.remove(this._config.inactiveButtonClass);
      button.disabled = false;
    }
  }
}