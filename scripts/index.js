import { initialCards, validationConfig } from "./addition.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

/* Переменные */
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupOpenButtonEditProfile = document.querySelector('.profile__edit-button');

const popupAddElementOpenButton = document.querySelector('.profile__add-button');
const popupAddElement = document.querySelector('.popup_add-element');

const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const popupInputName = document.querySelector('.popup__input_type_name')
const popupInputProfession = document.querySelector('.popup__input_type_profession');
const popupEditForm = document.forms['form_edit-profile']

const popupImage = document.querySelector('.popup_open-image');

const elementsContainer = document.querySelector('.elements__list');
const popupAddInputTitle = document.querySelector('.popup__input_type_title');
const popupAddInputLink = document.querySelector('.popup__input_type_link');
const formAddElement = document.forms['form_add-place'];

const popupImagePicture = document.querySelector('.popup__picture');
const popupImageCaption = document.querySelector('.popup__caption');

const popups = document.querySelectorAll('.popup')

/* Функции */
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc); 
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc); 
}

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (event.target.classList.contains('popup__button-close')) {
      closePopup(popup);
    }
  })
})

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

function submitFormEditProfile(event) {
  event.preventDefault()
  profileName.textContent = popupInputName.value;
  profileProfession.textContent = popupInputProfession.value;
  closePopupEditProfile();
}

function closePopupEditProfile() {
  closePopup(popupEditProfile);
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
function createCard (dataCard) {
  const cardNew = new Card (dataCard, '#card-template', openPopupImage);
  return cardNew.generateCard();
}

const addCard = (dataCard) => {
  const card = createCard(dataCard);
  elementsContainer.prepend(card);
}

/* рендер всех карточек*/
initialCards.forEach(addCard);

/* Слушатели */
popupOpenButtonEditProfile.addEventListener('click', () => {
  openPopupEditProfile();
  formValidators['form_edit-profile'].resetValidation()
});

popupEditForm.addEventListener('submit', submitFormEditProfile);

popupAddElementOpenButton.addEventListener('click', () => {
  openPopupAddElement();
  formAddElement.reset();
  formValidators['form_add-place'].resetValidation()
});

formAddElement.addEventListener('submit', submitFormAddCard);

const formValidators = {};
const enableValidation = (config) => {
  const forms = Array.from(document.querySelectorAll(config.formSelector))
  forms.forEach((form) => {
    const validator = new FormValidator(validationConfig, form)
    const formName = form.getAttribute('name')
    formValidators[formName] = validator;
    validator.enableValidation();
  })
}
enableValidation(validationConfig);