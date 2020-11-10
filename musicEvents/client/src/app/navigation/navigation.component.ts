import { User } from './../../models/user';
import { NetworkService } from './../services/network.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  loggedIn;
  public user: User = null;


  constructor(private networkService: NetworkService) {
    this.networkService.loggedIn.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });
    this.networkService.loggedUser.subscribe((loggedUser: User) => {
      this.user = loggedUser;
    })
  }

  ngOnInit(): void {

  }

  public onLogOut() {
    this.networkService.logout();
  }

}
