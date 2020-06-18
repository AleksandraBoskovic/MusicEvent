export class User {
  constructor(private _name: string, private _surname: string,
    private _username: string, private _password: string, private _isAdmin: string) {
  }

  get username() {
    return this._username;
  }

  get password() {
    return this._password;
  }

  admin(): boolean {
    if (this._isAdmin = 'admin')
      return true;
    return false;
  }

}
