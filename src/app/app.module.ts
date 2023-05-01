import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { CheckStatusComponent } from './components/check-status/check-status.component';
import { HttpClientModule } from '@angular/common/http';
import { CountExpressComponent } from './components/count-express/count-express.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorPageComponent,
    CountExpressComponent,
    CheckStatusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
