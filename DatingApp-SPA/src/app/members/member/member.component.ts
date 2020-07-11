import { UserService } from './../../_Services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/User';
import { AlertifyService } from '../../_Services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  users: User[];

  constructor(private alertifyService: AlertifyService,
      private userService: UserService,
      private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data['users'];
      console.log(this.users);
    });
  }

  loadUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
      
    }, error => {
      this.alertifyService.error(error);
    });
  }
}
