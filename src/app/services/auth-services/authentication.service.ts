import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authenticated: boolean = false;

  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    // Simulate authentication
    if (username === 'admin' && password === 'admin') {
      this.authenticated = true;
      return of(true);
    } else {
        alert("Username e/o password errati!")
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
