import { PaginationResult, Pagination } from './../../_models/Pagination';
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
  pagination: Pagination;

  constructor(private alertifyService: AlertifyService,
      private userService: UserService,
      private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data['users'].result;
      this.pagination = data['users'].pagination;
      console.log(data);
    });
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage).subscribe((res: PaginationResult<User[]>) => {
      this.users = res.result;
      this.pagination = res.pagination;
    }, error => {
      this.alertifyService.error(error);
    });
  }
}
