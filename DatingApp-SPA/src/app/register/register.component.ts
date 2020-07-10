import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../_Services/auth.service';
import { AlertifyService } from '../_Services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() valuesFromHome: any;
  model: any = {};
  constructor(private authService: AuthService, private alertifyService: AlertifyService) { }

  ngOnInit() {
    console.log(this.valuesFromHome);
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertifyService.success('Registration successfull');
    }, error => {
      console.log(error.error);
      this.alertifyService.error(error.error);
    });
  }

  cancel() {
    console.log("Canceled");
  }
}
