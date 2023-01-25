export class Card {
  constructor (dataCard, templateSelector, openPopupImage) {
    this._title = dataCard.title;
    this._link = dataCard.link;
    this._templateSelector = templateSelector;
    this._dataCard = dataCard;
    this._openPopupImage = openPopupImage;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector)
      .content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  _handleLike (event) {
    event.target.classList.toggle('element__button_active');
  }

  _handleDelete(event) {
    event.target.closest('.element').remove();
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', this._handleLike);
    this._deleteButton.addEventListener('click', this._handleDelete);
    this._elementLink.addEventListener('click', () => {this._openPopupImage(this._dataCard.title, this._dataCard.image)})
  }

  generateCard() {
    this._element = this._getTemplate();
    
    this._elementLink = this._element.querySelector('.element__image');
    this._elementTitle = this._element.querySelector('.element__title');
    this._likeButton = this._element.querySelector('.element__button');
    this._deleteButton = this._element.querySelector('.element__delete-button');

    this._elementTitle.textContent = this._title;

    this._elementLink.src = this._dataCard.image;
    this._elementLink.alt = this._dataCard.title;  

    this._setEventListeners();

    return this._element;
  }
}