import react from "react";
import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ImagePopup from "../ImagePopup/ImagePopup";
import Main from "../Main/Main";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = react.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = react.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = react.useState(false);
  const [selectedCard, setSelectedCard] = react.useState(null);
  const [isViewOpen, setIsViewOpen] = react.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardCLick(card) {
    setSelectedCard(card);
    setIsViewOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
    setIsViewOpen(false);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardCLick}
        />
        <Footer />

        <PopupWithForm
          name={"edit"}
          title={"Редактировать профиль"}
          buttonTitle={"Сохранить"}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            className="popup__input popup__input_type_name"
            name="name"
            id="profile-name"
            placeholder="Имя"
            autoComplete="off"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__input-error profile-name-input-error"></span>
          <input
            type="text"
            className="popup__input popup__input_type_status"
            name="status"
            id="profile-status"
            placeholder="Профессиональная деятельность"
            autoComplete="off"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__input-error profile-status-input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name={"add"}
          title={"Новое место"}
          buttonTitle={"Добавить"}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            className="popup__input popup__input_type_place-name"
            name="name"
            id="place-name"
            placeholder="Название"
            autoComplete="off"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__input-error place-name-input-error"></span>
          <input
            type="url"
            className="popup__input popup__input_type_place-url"
            name="url"
            id="place-url"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error place-url-input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name={"edit-avatar"}
          title={"Обновить аватар"}
          buttonTitle={"Сохранить"}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="url"
            className="popup__input popup__input_type_edit-avatar"
            name="avatar"
            id="edit-avatar"
            placeholder="Ссылка на аватар"
            autoComplete="on"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__input-error edit-avatar-input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name={"confirm"}
          title={"Вы уверены?"}
          buttonTitle={"Да"}
        ></PopupWithForm>

        {isViewOpen ? <ImagePopup card={selectedCard} onClose={closeAllPopups} /> : ""}
      </div>
    </div>
  );
}

export default App;