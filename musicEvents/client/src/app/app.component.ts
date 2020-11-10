import { NetworkService } from './services/network.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testClient';
  loggedIn;

  constructor(private networkService : NetworkService){
    this.networkService.loggedIn.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });
  }

}
