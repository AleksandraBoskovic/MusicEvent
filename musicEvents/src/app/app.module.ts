import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { GiphyGalleryComponent } from './giphy-gallery/giphy-gallery.component';
import { AdminComponent } from './admin/admin.component';
import { FiltersComponent } from './filters/filters.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { DetailsComponent } from './details/details.component';
import { MyticketsComponent } from './mytickets/mytickets.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegistrationComponent,
    LogInFormComponent,
    GiphyGalleryComponent,
    AdminComponent,
    FiltersComponent,
    HomeComponent,
    EventComponent,
    DetailsComponent,
    MyticketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
