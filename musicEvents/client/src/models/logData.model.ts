export class LogData {

  constructor(private _log: boolean , private _registration : boolean){
  }

  get log(){
    return this._log;
  }

  get registration(){
    return this._registration;
  }

  set log(log: boolean){
    this._log=log;
  }

  set registration(registration: boolean){
    this._registration= registration;
  }

}
