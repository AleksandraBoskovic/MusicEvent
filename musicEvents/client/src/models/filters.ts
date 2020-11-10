export class Filter {
  constructor(private _currentTypeMusic: string,private _hasCurrentTypeMusic: boolean,
    private _currentTypeEvent: string, private _hasTypeEvent: boolean,
    private _currentDate: string,private _hasCurrentDate) {
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

  get currentDate(): string {
    return this._currentDate;
  }

  set currentDate(currentDate: string) {
    this._currentDate = currentDate;
  }

  get hasCurrentDate(): boolean {
    return this._hasCurrentDate;
  }

  set hasCurrentDate(hasCurrentDate: boolean) {
    this._hasCurrentDate = hasCurrentDate;
  }


  // get currentTypeEntrance(): string {
  //   return this._currentTypeEntrance;
  // }

  // set currentTypeEntrance(currentTypeEntrance: string) {
  //   this._currentTypeEntrance = currentTypeEntrance;
  // }

  // get hasCurrentTypeEntrance(): boolean {
  //   return this._hasTypeEntrance;
  // }

  // set hasCurrentTypeEntrance(hasTypeEntrance: boolean) {
  //   this._hasTypeEntrance = hasTypeEntrance;
  // }

}
