import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypeScriptComponent } from './type-script/type-script.component';


const routes: Routes = [
  { path: 'type-script', component: TypeScriptComponent },
  {
    path: '',
    redirectTo: '/type-script',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
