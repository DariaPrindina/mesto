export class Card {
  // constructor(data) // {name, link, likes, userId}
  constructor ({api, data, templateSelector, handleCardClick, userId, handleConfirmDeletion}) {
    this._data = data;
    this._api = api;
    this._userId = userId;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleConfirmDeletion = handleConfirmDeletion;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector)
      .content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  _like() {
    if (!this._likeButton.classList.contains('element__button_active')) {
      this._api.putLike(this._id)
      .then((data) => {
        this._numberLikes.textContent = data.likes.length;
        this._likeButton.classList.add('.element__button_active')
      })
    } else {
      this._api.deleteLike(this._id)
      .then((data) => {
        this._likeButton.classList.remove('.element__button_active')
        this._numberLikes.textContent = data.likes.length;
      })
    }
  }

  handleDelete(){
    this._element.remove()
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {this._like()});
    this._deleteButton.addEventListener('click', () =>  {this._handleConfirmDeletion(this._id)});
    this._elementLink.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)})
  }
  
  generateCard() {
    this._element = this._getTemplate();
    
    this._elementLink = this._element.querySelector('.element__image');
    this._elementTitle = this._element.querySelector('.element__title');
    this._likeButton = this._element.querySelector('.element__button');
    this._numberLikes = this._element.querySelector('.element__number-likes')
    this._deleteButton = this._element.querySelector('.element__delete-button');

    this._elementTitle.textContent = this._name;
    this._elementLink.src = this._link;
    this._elementLink.alt = this._name;  

    
    if(this._likes.some((like) => like._id === this._userId)) {
      this._likeButton.classList.add('element__button_active')
    }

    this._numberLikes.textContent = this._likes.length

    if(this._ownerId == this._userId) {
      this._deleteButton.style.display = 'block';
    }

    this._setEventListeners();

    return this._element;
  }
}