import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth-data';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private token:string;
  URLRESTAPISIGNUP = 'http://localhost:3000/users/signup';
  URLRESTAPILOGIN = 'http://localhost:3000/users/login';
  createUser(formLogin: NgForm) {
    const AuthData: AuthData = {
      Email: formLogin.value.nameLogin,
      Password: formLogin.value.namePassword
    }
    this.http.post<AuthData>(this.URLRESTAPISIGNUP, AuthData).subscribe(response => {
      console.log(response);
    })
  }
  loginUSer(email: string, password: string) {
    const AuthData: AuthData = {
      Email: email,
      Password: password,
    }
    this.http.post<{token:string}>(this.URLRESTAPILOGIN, AuthData).subscribe(response => {

      this.token=response.token;
    })
  }
  getToken(){
    return this.token;
   }
}
