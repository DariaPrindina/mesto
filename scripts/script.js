
const popupElement = document.querySelector('.popup');
const popupCloseButton = popupElement.querySelector('.popup__button-close');
const popupOpenButton = document.querySelector('.profile__edit-button');
const addElementButton = document.querySelector('.profile__add-button');

function openPopup() {
  popupElement.classList.add('popup_opened');
}
function closePopup() {
  popupElement.classList.remove('popup_opened');
}

popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const popupInputName = document.querySelector('.popup__input_type_name')
const popupInputProfession = document.querySelector('.popup__input_type_profession');

popupInputName.value = profileName.textContent;
popupInputProfession.value = profileProfession.textContent;

const elementLikeActive = document.querySelector('.element__button_active');
const elementLikeButton = document.querySelector('.element__button');

function elementAddLike() {
  elementLikeButton.classList.toggle('element__button_active');
}

elementLikeButton.addEventListener('click', elementAddLike);

const popupSubmitButton = document.querySelector('.popup__submit-button');

function saveInputText(event) {
  profileName.textContent = popupInputName.value;
  profileProfession.textContent = popupInputProfession.value;
  closePopup();
}
popupSubmitButton.addEventListener('click', saveInputText);