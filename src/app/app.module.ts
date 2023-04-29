import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CountExpressComponent } from './count-express/count-express.component';
import { CheckPeopleComponent } from './check-people/check-people.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorPageComponent,
    CountExpressComponent,
    CheckPeopleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
