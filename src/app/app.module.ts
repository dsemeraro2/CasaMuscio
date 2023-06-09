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
import { FormsModule } from '@angular/forms';
import { NotesComponent } from './components/notes/notes.component';
import { LoginComponent } from './components/login/login.component';
import { HomeworksComponent } from './components/homeworks/homeworks.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorPageComponent,
    CountExpressComponent,
    CheckStatusComponent,
    NotesComponent,
    LoginComponent,
    HomeworksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
