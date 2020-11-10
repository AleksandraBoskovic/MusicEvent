import { AdministratorComponent } from './administrator/administrator.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TicketsComponent} from './tickets/tickets.component';
import {DetailsComponent} from './details/details.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"profile",component:ProfileComponent},
  {path:"administrator",component:AdministratorComponent},
  {path:"events/:id",component:DetailsComponent},
  {path:"tickets",component:TicketsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
