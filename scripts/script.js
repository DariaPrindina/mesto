/* Open, close popup "edit profile" */
const popupEditProfile = document.querySelector('#popup_profile-edit');
const popupCloseButton = popupEditProfile.querySelector('.popup__button-close');
const popupEditOpenButton = document.querySelector('.profile__edit-button');

function openPopup() {
  popupEditProfile.classList.add('popup_opened');
  popupInputName.value = profileName.textContent;
  popupInputProfession.value = profileProfession.textContent;
}
function closePopup() {
  popupEditProfile.classList.remove('popup_opened');
}

popupEditOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

/* Open, close popup "add element" */
const popupAddElementOpenButton = document.querySelector('.profile__add-button');
const popupAddElement = document.querySelector('#popup_add-element');
const popupAddelementCloseButton = document.querySelector('#popup_add-element__button-close');

function openPopupAddElement() {
  popupAddElement.classList.add('popup_opened');
}
function closePopupAddElement() {
  popupAddElement.classList.remove('popup_opened');
}
popupAddElementOpenButton.addEventListener('click', openPopupAddElement);
popupAddelementCloseButton.addEventListener('click', closePopupAddElement);

/* Submit form "edit profile" */
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const popupInputName = document.querySelector('.popup__input_type_name')
const popupInputProfession = document.querySelector('.popup__input_type_profession');
const popupEditForm = document.querySelector('#form_edit-profile');

function submitForm(event) {
  event.preventDefault()
  profileName.textContent = popupInputName.value;
  profileProfession.textContent = popupInputProfession.value;
  closePopup();
}

popupEditForm.addEventListener('submit', submitForm);

/* массив карточек из я.п.*/
const initialCards = [
  {
    title: 'Архыз',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    title: 'Челябинская область',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    title: 'Иваново',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    title: 'Камчатка',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    title: 'Холмогорский район',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
/* узлы (список карточек, форма, инпуты этой формы,
   место для заголовка и картинки в карточке) */
const elementsList = document.querySelector('.elements__list');
const popupAddInputTitle = document.querySelector('.popup__input_type_title');
const popupAddInputLink = document.querySelector('.popup__input_type_link');
const formAddElement = document.querySelector('#form__add-place');
const createButton = document.querySelector('.popup__create-button');

/* шаблоны */

const card = document.querySelector('#card-template').content.querySelector('.element');

/* open close popup image */
const popupImage = document.querySelector('.image-popup');
const popupImageButtonClose = popupImage.querySelector('.image-popup__button-close');
const popupImagePicture = popupImage.querySelector('.image-popup__picture');
const popupImageTitle = popupImage.querySelector('.image-popup__title');

function openPopupImage() {
  popupImage.classList.add('popup_opened');
  popupImagePicture.src = image;
  popupImageTitle.textContent = title;
  popupImagePicture.alt = title;
}

function closePopupImage() {
  popupImage.classList.remove('popup_opened');
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
  linkCard.addEventListener('click', openPopupImage);
  popupImageButtonClose.addEventListener('click', closePopupImage);

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

createButton.addEventListener('click', submitFormAddCard);
formAddElement.addEventListener('submit', submitFormAddCard);