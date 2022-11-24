
const popupElement = document.querySelector('.popup');
const popupCloseButton = popupElement.querySelector('.popup__button-close');
const popupOpenButton = document.querySelector('.profile__edit-button');
const addElementButton = document.querySelector('.profile__add-button');

function openPopup() {
  popupElement.classList.add('popup_opened');
  popupInputName.value = profileName.textContent;
  popupInputProfession.value = profileProfession.textContent;
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

const popupForm = document.querySelector('form');

function submitForm(event) {
  event.preventDefault()
  profileName.textContent = popupInputName.value;
  profileProfession.textContent = popupInputProfession.value;
  closePopup();
}

popupForm.addEventListener('submit', submitForm);