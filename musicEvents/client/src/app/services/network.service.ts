import { LoginData } from './../../models/loginData';
import { UserResponse } from './../../models/userResponse';
import { User } from './../../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { Router } from "@angular/router"
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  // cuvamo podatke o loggedIn i aktivnomUseru kada menjamo stranice bez refreshovanja browsera
  private loggedUserSafe: User = null;
  private loggedInSafe: boolean = null;

  public loggedUser: Subject<User>;
  public loggedIn: Subject<boolean>;
  private registerUrl: string = "http://localhost:3000/usersNew/";
  private createAdministratorUrl = "http://localhost:3000/usersNew/administrator";
  private loginUrl: string = "http://localhost:3000/usersNew/login";
  private logoutUrl: string = "http://localhost:3000/usersNew/logout"
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  constructor(private http: HttpClient, private router: Router) {
    this.loggedIn = new Subject();
    this.loggedUser = new Subject<User>();
    this.getLogin();
  }

  public register(registerData): Observable<UserResponse> {
    const body = {
      "name": registerData.name,
      "surname": registerData.surname,
      "username": registerData.username,
      "password": registerData.password,
      "email": registerData.email,
      "phone": registerData.phone
    }
    return this.http.put<UserResponse>(this.registerUrl, body, this.httpOptions);
  }

  public createAdministrator(registerData): Observable<UserResponse> {
    const body = {
      "name": registerData.name,
      "surname": registerData.surname,
      "username": registerData.username,
      "password": registerData.password,
      "email": registerData.email,
      "phone": registerData.phone
    }
    return this.http.put<UserResponse>(this.createAdministratorUrl, body, this.httpOptions);
  }

  public doLogin(loginData: LoginData) {
    const body = {
      "username": loginData.username,
      "password": loginData.password
    };
    this.http.post(this.loginUrl, body, { withCredentials: true }).subscribe((resp: UserResponse) => {
      this.loggedIn.next(true);
      this.loggedUser.next(resp.user);
      //u vezi sa menjanjem stranica
      this.loggedInSafe = true;
      this.loggedUserSafe = resp.user;

      this.router.navigate(['']);
    }, (err) => {
      this.loggedIn.next(false);
      this.loggedUser.next(null);

      //u vezi sa menjanjem stranica
      this.loggedInSafe = false;
      this.loggedUserSafe = null;
      window.alert(err.error.message);
    });
  }

  public getLogin() {
    this.http.get(this.loginUrl, {
      withCredentials: true
    }).subscribe((resp: any) => {
      this.loggedUser.next(resp.user);
      this.loggedIn.next(resp.loggedIn);

      //u vezi sa menjanjem stranica
      this.loggedInSafe = resp.loggedIn
      this.loggedUserSafe = resp.user;
    }, (err) => {
      window.alert("Oops, something went wrong getting the logged in status");
    })
  }

  public logout() {
    this.http.post(this.logoutUrl, {}, {
      withCredentials: true
    }).subscribe(() => {
      this.loggedIn.next(false);
      this.router.navigate([''])
    });
    this.loggedInSafe = false;
  }


  public getLoggedIn(): boolean {
    return this.loggedInSafe;
  }

  public getLoggedUser(): User {
    return this.loggedUserSafe;
  }

  public updateUser(fieldName: string, newValue: string, id: string): Observable<{ message: string, user: User }> {
    const body = [{
      "fieldName": fieldName,
      "newValue": newValue
    }]
    return this.http.patch<{ message: string, user: User }>(this.registerUrl + id, body);
  }


}
