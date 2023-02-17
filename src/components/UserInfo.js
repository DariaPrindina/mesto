export class UserInfo {
  constructor({name, profession, avatar}) {
    this._name = name;
    this._profession = profession;
    this._avatar = avatar;
  }

  // метод возвращает объект с данными пользователя
  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      profession: this._profession.textContent,
      avatar: this._avatar.src
    }
    return userInfo;
  }

  // принимает новые данные пользователя,
  // добавляет их на страницу
  setUserInfo(data) {
    this._name.textContent = data.name;
    this._profession.textContent = data.about;
    this._avatar.src = data.avatar;
  }
}