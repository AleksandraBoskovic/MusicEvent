export class User {

constructor(private name: string,private surname: string,private username: string,private password: string){
}

getUsername(): string {
  return this.username;
}

}
