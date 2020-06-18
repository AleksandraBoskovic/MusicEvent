export class Event {
  constructor(private _event: string, private _adress: string, private _date: string,
    private _typeOfMusic: string, private _freeEntrance: string, private _price: string,
    private _typeOfEvent: string, private _performer: string, private _capacity: number) {
  }

  get event(): string {
    return this._event;
  }
  get adress(): string {
    return this._adress;
  }
  get date(): string {
    return this._date;
  }
  get typeOfMusic(): string {
    return this._typeOfMusic;
  }
  get freeEntrance(): string {
    return this._freeEntrance;
  }
  get price(): string {
    return this._price;
  }
  get typeOfEvent(): string {
    return this._typeOfEvent;
  }
  get performer(): string {
    return this._performer;
  }
  get capacity(): number {
    return this._capacity;

  }
  set event(value: string) {
    this._event = value;
  }
  set adress(value: string) {
    this._adress = value;
  }
  set date(value: string) {
    this._date = value;
  }
  set typeOfMusic(value: string) {
    this._typeOfMusic = value;
  }
  set freeEntrance(value: string) {
    this._freeEntrance = value;
  }
  set price(value: string) {
    this._price = value;
  }
  set typeOfEvent(value: string) {
    this._typeOfEvent = value;
  }
  set performer(value: string) {
    this._performer = value;
  }
  set capacity(value: number) {
    this._capacity = value;
  }


}
