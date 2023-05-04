import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth-services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  }

  username!: string;
  password!: string;

  constructor(private authService: AuthenticationService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe((result: any) => {
      if (result) {
        this.router.navigate(['/home']);
      }
    });
  }
}
