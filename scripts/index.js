
import { initialCards, enableValidation } from "./addition.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

/* Переменные */
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

const elementsContainer = document.querySelector('.elements__list');
const popupAddInputTitle = document.querySelector('.popup__input_type_title');
const popupAddInputLink = document.querySelector('.popup__input_type_link');
const formAddElement = document.querySelector('#form_add-place');

const popupImagePicture = document.querySelector('.popup__picture');
const popupImageCaption = document.querySelector('.popup__caption');

/* Функции */
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
}

popupEditProfile.addEventListener('mousedown', closePopupByOverlay);
popupImage.addEventListener('mousedown', closePopupByOverlay);
popupAddElement.addEventListener('mousedown', closePopupByOverlay);

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}

function closePopupByOverlay(event) {
  if (event.target.classList.contains('popup_opened')) {
    closePopup(event.target);
  }
}

function closePopupByEsc(event) {
  if (event.key === "Escape") {
    closePopup(document.querySelector('.popup_opened'));
  }
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

/* Submit form Add Card форма обработчик */
const submitFormAddCard = (event) => {
  event.preventDefault();
  addCard({ title: popupAddInputTitle.value, image: popupAddInputLink.value });
  popupAddInputTitle.value = '';
  popupAddInputLink.value = '';
  event.submitter.classList.add('popup__submit-button_inactive');
  event.submitter.disabled = true;
  closePopupAddElement();
}

/* Открытие попапа изображения */
const openPopupImage = (title, image) => {
  popupImagePicture.src = image;
  popupImageCaption.textContent = title;
  popupImagePicture.alt = title;
  openPopup(popupImage);
}

/* добавление карточки */
const addCard = (dataCard) => {
  const cardNew = new Card (dataCard, '#card-template', openPopupImage)
  const card = cardNew.generateCard()
  elementsContainer.prepend(card);
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

const popupAddElementValidator = new FormValidator(enableValidation, formAddElement);
const popupEditFormValidator = new FormValidator(enableValidation, popupEditForm)
popupAddElementValidator.enableValidation();
popupEditFormValidator.enableValidation();