import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { UserService } from 'src/app/_Services/user.service';
import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/User';
import { AlertifyService } from '../_Services/alertify.service';
import { AuthService } from '../_Services/auth.service';


@Injectable()
export class MemberEditResolver implements Resolve<User>{
    constructor(private userService: UserService,
                private alertifyService: AlertifyService,
                private router: Router,
                public authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.userService.getUser(this.authService.decodeToken.nameid).pipe(
            catchError(error => {
                this.alertifyService.error('Problem in retrieving data 2');
                this.router.navigate(['/member']);
                return of(null);
            })
        );
    }
}