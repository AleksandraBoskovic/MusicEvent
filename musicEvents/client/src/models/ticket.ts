
export class Ticket {
  constructor(private _id, private _nazivDog: string, private _adresa: string,
    private _datum: string, private _cena: Number, private _odabrano: Number) {
  }
  get id() {
    return this._id;
  }
  get naziv() {
    return this._nazivDog;
  }
  get adresa() {
    return this._adresa;
  }
  get datum() {
    return this._datum;
  }
  get cena() {
    return this._cena;
  }
  get odabrano() {
    return this._odabrano;
  }

}
