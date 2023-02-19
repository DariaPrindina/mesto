import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector, {deletion}) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__content')
    this._buttonConfirm = this._popup.querySelector('.popup__submit-button')
    this._deletion = deletion
  }

  listenerDeleteCard(card) {
    this._buttonConfirm.addEventListener('mousedown', () => {
      this._deletion(card)
      this.close()
    })
  }

  setEventListeners() {
    super.setEventListeners();
    this.listenerDeleteCard()
    // this._buttonConfirm.addEventListener('mousedown', () => {
    //   this._handleSubmitDeletion()
    //   this.close()
    // })
  }
}