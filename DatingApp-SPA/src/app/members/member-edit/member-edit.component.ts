import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { AuthService } from 'src/app/_Services/auth.service';
import { AlertifyService } from 'src/app/_Services/alertify.service';
import { UserService } from 'src/app/_Services/user.service';
import { User } from 'src/app/_models/User';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  user: User;
  @ViewChild('editForm') editForm: NgForm; //reset the form and stay newly added text
  @HostListener('window:beforeunload',  ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(public authService: AuthService,
              private alertifyService: AlertifyService,
              private userService: UserService,
              private route: ActivatedRoute,
              ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;

    });
  }

  updateUser(){

    this.userService.updateUser(this.authService.decodeToken.nameid, this.user).subscribe(next =>{
      this.editForm.reset(this.user);
      this.alertifyService.success('Profile Updated!');
    }, error => {
      this.alertifyService.error(error);
    });
    this.editForm.reset(this.user);

  }

}