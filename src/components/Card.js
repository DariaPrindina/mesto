export class Card {
  constructor ({dataCard, templateSelector, handleCardClick}) {
    this._title = dataCard.title;
    this._image = dataCard.image;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }
  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector)
      .content.querySelector('.element').cloneNode(true);
    return cardElement;
  }
  _handleLike () {
    this._likeButton.classList.toggle('element__button_active');
  }
  _handleDelete() {
    this._element.remove();
  }
  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {this._handleLike()});
    this._deleteButton.addEventListener('click', () =>  {this._handleDelete()});
    this._elementLink.addEventListener('click', () => {
      this._handleCardClick(this._title, this._image)})
  }
  generateCard() {
    this._element = this._getTemplate();
    
    this._elementLink = this._element.querySelector('.element__image');
    this._elementTitle = this._element.querySelector('.element__title');
    this._likeButton = this._element.querySelector('.element__button');
    this._deleteButton = this._element.querySelector('.element__delete-button');

    this._elementTitle.textContent = this._title;
    this._elementLink.src = this._image;
    this._elementLink.alt = this._title;  

    this._setEventListeners();

    return this._element;
  }
}