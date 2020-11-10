import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms"
import {FormsModule} from "@angular/forms"


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { DetailsComponent } from './details/details.component';
import { TicketsComponent } from './tickets/tickets.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    AdministratorComponent,
    DetailsComponent,
    TicketsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
