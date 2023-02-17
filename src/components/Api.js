export class Api {
  constructor(options) {
    this._options = options;
    this._baseUrl = this._options.baseUrl;
    this._headers = this._options.headers;
  }

  // Статус ответа
  _responseStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка 1: ${res} ${res.status}`)
  }

  // Загрузка информации о пользователе с сервера
  getUserInfo() {
    return fetch(
      `${this._baseUrl}/users/me`,
      {headers: this._headers}
    )
    .then(res => this._responseStatus(res));
  }

  // Загрузка карточек с сервера
  getInitialCards() {
    return fetch(
      `${this._baseUrl}/cards `,
      {headers: this._headers}
    )
    .then(res => this._responseStatus(res));
  }
  
  // Редактирование профиля
  editProfile(data) {
    return fetch(`${this._baseUrl}/users/me`,
      {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify ({
          name: data.name,
          about: data.profession
        })
      })
      .then(res => this._responseStatus(res));
  }

  // Добавление новой карточки
  addNewCard(data) {
    return fetch(`${this._baseUrl}/cards`,
      {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify ({
          name: data.title,
          link: data.link
        })
      })
      .then(res => this._responseStatus(res));
  }

  // Удаление карточки
  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`,
      {
        method: 'DELETE',
        headers: this._headers
      })
      .then(res => this._responseStatus(res));
  }

  // Постановка лайка
  putLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`,
    {
      method: 'PUT',
      headers: this._headers
    })
    .then(res => this._responseStatus(res));
  }

  // Снятие лайка
  deleteLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`,
    {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res => this._responseStatus(res));
  }

  // Обновление аватара
  updAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`,
    {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify ({
        avatar: data.avatar,
      })
    })
    .then(res => this._responseStatus(res));
  }
}