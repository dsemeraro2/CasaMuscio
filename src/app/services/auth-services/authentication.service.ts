import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private authenticated: boolean = false;

  constructor() {}

  login(username: string, password: string): Observable<boolean> {
    if (username === '' && password === '') {
      alert("Username e/o password errati!")
    }

    if (username === 'imuscino' && password === 'viapiave128') {
      this.authenticated = true;
      return of(true);
    } else {
      alert('Username e/o password errati!');
      return of(false);
    }
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  logout(): void {
    this.authenticated = false;
  }
}
