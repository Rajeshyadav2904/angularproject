import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string='admin';
  password:string='admin@123'
getUsername(){
  return this.username;
}
getPassword(){
  return this.password;
}
  constructor() { }

  ngOnInit(): void {
  }

}
