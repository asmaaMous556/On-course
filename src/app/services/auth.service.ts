import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
user:User
api='http://localhost:3000/user';
  constructor(private http: HttpClient, private router: Router) { }
getAccessToken(){
  return localStorage.getItem('user_token');
}

  signUp (email:string,password:string,confirmPassword:string){
    this.user={
      email: email,
      password:password,
      confirmPassword:confirmPassword
    }
    return this.http.post(this.api+'/register', this.user);
  }

  login(email: string,password:string,){
    this.user={
      email: email,
      password:password,
     
    }
    return this.http.post(this.api+'/login',this.user).subscribe((result:any)=>{
      localStorage.setItem('user_token',result['token']);// names of my backend 
       localStorage.setItem('user_email',result.user.email);
      localStorage.setItem('user_id',result['userId']);
  this.router.navigate(['home']);

    });
  }

  authenticate (){
    return this.http.get(this.api+'/home');
  }

  getUserEmail(){
    console.log(localStorage.getItem('user_email'));
    return localStorage.getItem('user_email');
    
  }
  
}


