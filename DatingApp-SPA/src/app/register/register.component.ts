import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../_Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() valuesFromHome: any;
  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
    console.log(this.valuesFromHome);
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('registeration Succesfull');
    }, error => {
      console.log(error);
    });
  }

  cancel() {
    console.log("Canceled");
  }
}
