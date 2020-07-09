import { Component, OnInit } from '@angular/core';
import { DefaultSerializer } from 'v8';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  getValues() {

    const token = localStorage.getItem('token');
    let httpOptions = null;
    if (token) {
      httpOptions = {
        headers: new HttpHeaders({
          Authorization:  'Bearer ' + token
        })
      };
    }

    this.http.get('http://localhost:5000/api/values', httpOptions).subscribe(response => {
      this.values = response;
    }, error => {
        console.log(error);
    });
  }

}
