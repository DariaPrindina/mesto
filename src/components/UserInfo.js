export class UserInfo {
  constructor({name, profession}) {
    this._name = name;
    this._profession = profession;
  }

  // метод возвращает объект с данными пользователя
  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      profession: this._profession.textContent
    }
    return userInfo;
  }

  // принимает новые данные пользователя,
  // добавляет их на страницу
  setUserInfo(value) {
    this._name.textContent = value.name;
    this._profession.textContent = value.profession;
  }
}