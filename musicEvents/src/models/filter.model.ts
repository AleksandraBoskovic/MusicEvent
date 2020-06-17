export class Filter {
  constructor(private _currentTypeMusic: string,
    private _currentTypeEvent: string, private _currentTypeEntry : string,
     private _minPrice:string ,private _maxPrice:string) {
  }


  get currentTypeMusic(): string {
    return this._currentTypeMusic;
  }

  set currentTypeMusic(currentTypeMusic: string) {
    this._currentTypeMusic = currentTypeMusic;
  }


  get currentTypeEvent(): string {
    return this._currentTypeEvent;
  }

  set currentTypeEvent(currentTypeEvent: string) {
    this._currentTypeEvent = currentTypeEvent;
  }

  get currentTypeEntry(): string {
    return this._currentTypeEntry;
  }

  set currentTypeEntry(currentTypeEntry: string) {
    this._currentTypeEntry = currentTypeEntry;
  }

  get currentMax(): string {
    return this._maxPrice;
  }

  set currentMax(currentMax: string) {
    this._maxPrice = currentMax;
  }

  get currentMin(): string {
    return this._minPrice;
  }

  set currentMin(currentMin: string) {
    this._minPrice = currentMin;
  }
}
