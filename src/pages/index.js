import './index.css' // главный файл стилей 
import { 
  initialCards, 
  validationConfig,
  popupEditProfileOpenButton, 
  popupAddElementOpenButton,
  profileName,
  profileProfession,
  popupInputName,
  popupInputProfession,
  popupAddInputTitle,
  popupAddInputLink,
  popupImagePicture,
  popupImageCaption 
} from "../components/addition.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";

const userInfo = new UserInfo({
  name: profileName,
  profession: profileProfession
})

const formSubmitEditProfile = (value) => {
  userInfo.setUserInfo(value)
  formPopupEditProfile.setEventListeners();
}

const formSubmitAddCard = () => {
  formPopupAddElement.setEventListeners();
  const element = createCard(
    {title: popupAddInputTitle.value, 
    image: popupAddInputLink.value
  })
  listCards.addItem(element);
  formPopupAddElement.close();
}

const formPopupEditProfile = new PopupWithForm(
  '.popup_edit-profile', formSubmitEditProfile)

  const formPopupAddElement = new PopupWithForm(
  '.popup_add-element', formSubmitAddCard)

const handleCardClick = (title, image) => {
  const popupWhithImage = new PopupWithImage(
    {title: popupImagePicture,
     image: popupImageCaption},
    '.popup_open-image'
  )
  popupWhithImage.open(title, image)
  popupWhithImage.setEventListeners();
}

const createCard = (dataCard) => {
  const cardNew = new Card (
    dataCard,
    '#card-template', 
    handleCardClick);
  return cardNew.generateCard();
}

const listCards = new Section({
  items: initialCards, 
  renderer: (dataCard) => {
    listCards.addItem(createCard(dataCard))
  }},
  '.elements__list'
);

listCards.renderItems();

// Валидация
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

popupEditProfileOpenButton.addEventListener('click', () => {
  formValidators['form_edit-profile'].resetValidation();
  const {name, profession} = userInfo.getUserInfo();
  popupInputName.value = name;
  popupInputProfession.value = profession;
  formPopupEditProfile.open();
  formPopupEditProfile.setEventListeners();
});

popupAddElementOpenButton.addEventListener('click', () => {
  formValidators['form_add-place'].resetValidation();
  formPopupAddElement.open();
  formPopupAddElement.setEventListeners();
});