import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { UserService } from 'src/app/_Services/user.service';
import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/User';
import { AlertifyService } from '../_Services/alertify.service';


@Injectable()
export class MemberListResolver implements Resolve<User[]>{
    constructor(private userService: UserService,
                private alertifyService: AlertifyService,
                private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
        return this.userService.getUsers().pipe(
            catchError(error => {
                this.alertifyService.error('Problem in retrieving data 3');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}