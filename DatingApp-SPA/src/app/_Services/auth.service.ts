import { logging } from 'protractor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:5000/api/auth/';

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model)
    .pipe(
      map((response: any) => {
        const user = response;
        console.log(user);
        if (user) {
          localStorage.setItem('token', user.token);
          localStorage.setItem('role', JSON.parse(window.atob(user.token.split('.')[1])).role);
        }
      })
    );
  }

  isAnAdmin() {
    if (localStorage.getItem('role') === 'Admin') {
      return true;
    }
  }

  roleMatch(allowedRoles): boolean {

    let isMatch = false;
    const payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    const userRole = payLoad.role;

    allowedRoles.forEach(element => {

      if (userRole === element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }
}
