import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onLogin(formLogin: NgForm):void {
    this.authService.loginUSer(formLogin.value.login,formLogin.value.password);
    alert("oke");
  }
  getToken():void{
    this.authService.getToken();
  }
}
