export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._escape = 'Escape';
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', (event) => {this._handleEscClose(event)});
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', (event) => {this._handleEscClose(event)}); 
  }

  _handleEscClose(event) {
    if (event.key == this._escape) { 
      this.close(); 
    } 
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (event) => {
      if (event.target.classList.contains('popup_opened')) {
        this.close(); 
      }
      if (event.target.classList.contains('popup__button-close')) {
        this.close(); 
      }
    })
  }
}