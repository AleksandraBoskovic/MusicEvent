export class Filter {
  constructor(private _currentTypeMusic: string,private _hasCurrentTypeMusic: boolean,
    private _currentTypeEvent: string, private _hasTypeEvent: boolean,
    private _currentTypeEntrance: string, private _hasTypeEntrance: boolean,
    private _minPrice: string, private _hasMinPrice : boolean,
     private _maxPrice: string, private _hasMaxPrice: boolean) {
  }


  get currentTypeMusic(): string {
    return this._currentTypeMusic;
  }

  set currentTypeMusic(currentTypeMusic: string) {
    this._currentTypeMusic = currentTypeMusic;
  }

  get hasCurrentTypeMusic(): boolean {
    return this._hasCurrentTypeMusic;
  }

  set hasCurrentTypeMusic(hasCurrentTypeMusic: boolean) {
    this._hasCurrentTypeMusic = hasCurrentTypeMusic;
  }


  get currentTypeEvent(): string {
    return this._currentTypeEvent;
  }

  set currentTypeEvent(currentTypeEvent: string) {
    this._currentTypeEvent = currentTypeEvent;
  }


  get hasCurrentTypeEvent(): boolean {
    return this._hasTypeEvent;
  }

  set hasCurrentTypeEvent(hasTypeEvent: boolean) {
    this._hasTypeEvent = hasTypeEvent;
  }


  get currentTypeEntrance(): string {
    return this._currentTypeEntrance;
  }

  set currentTypeEntrance(currentTypeEntrance: string) {
    this._currentTypeEntrance = currentTypeEntrance;
  }

  get hasCurrentTypeEntrance(): boolean {
    return this._hasTypeEntrance;
  }

  set hasCurrentTypeEntrance(hasTypeEntrance: boolean) {
    this._hasTypeEntrance = hasTypeEntrance;
  }


  get currentMax(): string {
    return this._maxPrice;
  }

  set currentMax(currentMax: string) {
    this._maxPrice = currentMax;
  }

  get hasCurrentMax(): boolean {
    return this._hasMaxPrice;
  }

  set hasCurrentMax(hasCurrentMax: boolean) {
    this._hasMaxPrice =hasCurrentMax;
  }


  get currentMin(): string {
    return this._minPrice;
  }

  set currentMin(currentMin: string) {
    this._minPrice = currentMin;
  }

  get hasCurrentMin(): boolean {
    return this._hasMinPrice;
  }

  set hasCurrentMin(hasCurrentMin: boolean) {
    this._hasMinPrice =hasCurrentMin;
  }



}
