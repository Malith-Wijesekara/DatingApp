import { AlertifyService } from './../_Services/alertify.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_Services/auth.service';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedGuard implements CanDeactivate<MemberEditComponent> {

  canDeactivate(component: MemberEditComponent): boolean  {
    if (component.editForm.dirty) {
      return confirm('Are you sure you want to exit?');
    }

    return true;
  }

}
