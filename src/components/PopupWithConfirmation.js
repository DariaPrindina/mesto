import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__content')
  }

  handleSubmit(remove) {
    this._handleSubmit = remove;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('click', (event) => {
      event.preventDefault();
      this.handleSubmit()
      this.close();
    })
  }
}