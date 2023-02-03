import './index.css'
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
} from "../utils/addition.js";
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

const formPopupEditProfile = new PopupWithForm(
  '.popup_edit-profile',
  {formSubmit: (data) => {
    userInfo.setUserInfo(data)
  }}
)
formPopupEditProfile.setEventListeners();

const formPopupAddElement = new PopupWithForm(
  '.popup_add-element', 
  {formSubmit: (data) => {
    const image = data["link"]
    const title = data["title"]
    listCards.addItem(createCard({image, title}));
    formPopupAddElement.close();
    console.log(data)
  }})

formPopupAddElement.setEventListeners();

const popupWhithImage = new PopupWithImage(
  '.popup_open-image')
popupWhithImage.setEventListeners();

const createCard = (dataCard) => {
  const cardNew = new Card ({
    dataCard, 
    templateSelector: '#card-template', 
    handleCardClick: (title, image) => {
      popupWhithImage.open(title, image)
    }
  });
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
  formPopupEditProfile.setInputValues(userInfo.getUserInfo())
  formPopupEditProfile.open();
});

popupAddElementOpenButton.addEventListener('click', () => {
  formValidators['form_add-place'].resetValidation();
  formPopupAddElement.open();
});