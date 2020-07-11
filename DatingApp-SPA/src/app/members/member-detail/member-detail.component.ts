import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from './../../_Services/alertify.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/User';
import { AuthService } from 'src/app/_Services/auth.service';
import { UserService } from 'src/app/_Services/user.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {


  user: User;
  constructor(public authService: AuthService,
              private alertifyService: AlertifyService,
              private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }
}
