export class User {
  

constructor(private name: string,private surname: string,private username: string,private password: string){
// this.name = name;
// this.surname = surname;
// this.username = username;
// this.password = password;
}

getUsername(): string {
  return this.username;
}


}
