import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogInComponent} from './log-in/log-in.component';
import {RegistrationComponent} from './registration/registration.component';
import {AdminComponent} from './admin/admin.component'
const routes: Routes = [
  { path: 'logIn', component: LogInComponent  },
  { path: 'admin', component: AdminComponent},
  { path: 'registration', component: RegistrationComponent  },
  {
    path: '',
    redirectTo: '/logIn',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
