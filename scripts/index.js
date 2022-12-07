/* Переменные */
const popup = document.querySelector('.popup');

const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupCloseButtonEditProfile = document.querySelector('.popup__button-close_edit-profile');
const popupOpenButtonEditProfile = document.querySelector('.profile__edit-button');

const popupAddElementOpenButton = document.querySelector('.profile__add-button');
const popupAddElementCloseButton = document.querySelector('.popup__button-close_add-element');
const popupAddElement = document.querySelector('.popup_add-element');

const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const popupInputName = document.querySelector('.popup__input_type_name')
const popupInputProfession = document.querySelector('.popup__input_type_profession');
const popupEditForm = document.querySelector('#form_edit-profile');

const popupImage = document.querySelector('.popup_open-image');
const popupImageButtonClose = document.querySelector('.popup__button-close-image');
const popupImageTitle = document.querySelector('.popup__caption');

const elementsList = document.querySelector('.elements__list');
const popupAddInputTitle = document.querySelector('.popup__input_type_title');
const popupAddInputLink = document.querySelector('.popup__input_type_link');
const formAddElement = document.querySelector('#form_add-place');
const createButton = document.querySelector('.popup__submit-button_add-element');

const card = document.querySelector('#card-template').content.querySelector('.element');

const popupImagePicture = document.querySelector('.popup__picture');
const popupImageCaption = document.querySelector('.popup__caption');

/* Функции */
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openPopupEditProfile() {
  popupInputName.value = profileName.textContent;
  popupInputProfession.value = profileProfession.textContent;
  openPopup(popupEditProfile);
}
function closePopupEditProfile() {
  closePopup(popupEditProfile);
}

function submitFormEditProfile(event) {
  event.preventDefault()
  profileName.textContent = popupInputName.value;
  profileProfession.textContent = popupInputProfession.value;
  closePopupEditProfile();
}

function openPopupAddElement() {
  openPopup(popupAddElement);
}
function closePopupAddElement() {
  closePopup(popupAddElement);
}

function closePopupImage() {
  closePopup(popupImage);
}

/* генерация карточки */
const generateNewCard = (dataCard) => {
  const copyCard = card.cloneNode(true);
  const titleCard = copyCard.querySelector('.element__title');
  titleCard.textContent = dataCard.title;

  const linkCard = copyCard.querySelector('.element__image');
  linkCard.src = dataCard.image;
  linkCard.alt = dataCard.title;

  const deleteCard = (event) => {
    event.target.closest('.element').remove();
  }
  const likeCard = (event) => {
    event.target.closest('.element__button').classList.toggle('element__button_active');
  }
  const pomoykaButton = copyCard.querySelector('.element__delete-button');
  pomoykaButton.addEventListener('click', deleteCard);
  const likeButton = copyCard.querySelector('.element__button');
  likeButton.addEventListener('click', likeCard);

  linkCard.addEventListener('click', () => {
    popupImagePicture.src = dataCard.image;
    popupImageCaption.textContent = dataCard.title;
    popupImagePicture.alt = dataCard.title;
    openPopup(popupImage);
});

  return copyCard;
}

/* Submit form Add Card форма обработчик */

const submitFormAddCard = (event) => {
  event.preventDefault();
  addCard({ title: popupAddInputTitle.value, image: popupAddInputLink.value });
  popupAddInputTitle.value = '';
  popupAddInputLink.value = '';

  closePopupAddElement();
}

/* добавление карточки */
const addCard = (dataCard) => {
  elementsList.prepend(generateNewCard(dataCard));
}

/* рендер всех карточек 
 submit по форме*/

initialCards.forEach((dataCard) => {
  addCard(dataCard);
})


/* Слушатели */
popupOpenButtonEditProfile.addEventListener('click', openPopupEditProfile);
popupCloseButtonEditProfile.addEventListener('click', closePopupEditProfile);

popupEditForm.addEventListener('submit', submitFormEditProfile);

popupAddElementOpenButton.addEventListener('click', openPopupAddElement);
popupAddElementCloseButton.addEventListener('click', closePopupAddElement);

popupImageButtonClose.addEventListener('click', closePopupImage);

formAddElement.addEventListener('submit', submitFormAddCard);