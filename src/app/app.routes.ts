import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';


export const AppRoutes: Routes = [
  { path: '', component: HomeComponent },

  //ErrorPage
  { path: '**', pathMatch: 'full', component: ErrorPageComponent }
];