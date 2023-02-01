import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImagePicture = this._popup.querySelector('.popup__picture');
    this._popupImageCaption = this._popup.querySelector('.popup__caption');
  }

  open(title, link) {
    this._popupImagePicture.src = link;
    this._popupImageCaption.textContent = title;
    this._popupImagePicture.alt = title;
    super.open();
  }
}