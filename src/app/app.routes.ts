import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';


export const AppRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },


  //ErrorPage
  { path: '**', pathMatch: 'full', component: ErrorPageComponent }
];