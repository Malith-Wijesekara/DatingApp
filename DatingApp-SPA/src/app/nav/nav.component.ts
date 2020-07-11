import { AlertifyService } from './../_Services/alertify.service';
import { AuthService } from './../_Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(
    public authService: AuthService,
    private alertifyService: AlertifyService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      (next) => {
        this.alertifyService.success('Logged in successfully');
      },
      (error) => {
        this.alertifyService.error(error.statusText);
      },
      () => {
        this.router.navigate(['/member']);
      }
    );
  }

  loggedIn() {
    return this.authService.loggedIn();
  }
 
  logout() {
    localStorage.removeItem('token');
    // localStorage.removeItem('role');
    this.alertifyService.message('Logged out');
    this.router.navigate(['/home']);
  }
}
