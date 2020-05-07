export class User {
  private name: string;
  private surname: string;
  private username: string;
  private password: string;

constructor(name: string, surname: string, username: string, password: string){
this.name = name;
this.surname = surname;
this.username = username;
this.password = password;
}

getUsername(): string {
  return this.username;
}


}
