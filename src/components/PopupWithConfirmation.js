import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__content')
  }

  confirmDeletion(callback){
    this._handleSubmitDeletion = callback
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', () => {
      this._handleSubmitDeletion()
    })
  }
}