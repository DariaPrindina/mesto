import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__content')
    this._buttonConfirm = this._popup.querySelector('.popup__submit-button')
  }

  confirmDeletion(handleSubmitDeletion){
    this._handleSubmitDeletion = handleSubmitDeletion
  }

  setEventListeners() {
    super.setEventListeners();

    this._buttonConfirm.addEventListener('mousedown', () => {
      this._handleSubmitDeletion()
      this.close()
    })
  }
}