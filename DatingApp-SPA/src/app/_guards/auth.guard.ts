import { AlertifyService } from './../_Services/alertify.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    private alertifyService: AlertifyService,
    private router: Router
  ) {}

  canActivate(): boolean  {
    if (this.authService.loggedIn()) {
      return true;
    }

    this.alertifyService.error('You should not pass!');
    this.router.navigate(['/home']);
    return false;
  }

}
