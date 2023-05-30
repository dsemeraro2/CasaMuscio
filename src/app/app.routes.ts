import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';


export const AppRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // RIMUOVERE i COMMENTi PER ABILITARE IL LOGIN
  //{ path: 'login', component: LoginComponent },
  //{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },

  //ErrorPage
  { path: '**', pathMatch: 'full', component: ErrorPageComponent }
];