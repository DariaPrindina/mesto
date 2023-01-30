import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor({title, link}, popupSelector) {
    super(popupSelector);
    this._title = title;
    this._link = link;
  }

  open(title, link) {
    const popupImagePicture = this._popup.querySelector('.popup__picture');
    const popupImageCaption = this._popup.querySelector('.popup__caption');
    popupImagePicture.src = link;
    popupImageCaption.textContent = title;
    popupImagePicture.alt = title;
    super.open();
  }
}