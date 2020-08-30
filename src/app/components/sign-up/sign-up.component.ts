import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  signUp(user:User){
    
 this.authService.signUp(user.email,user.password,user.confirmPassword)
 .subscribe((result:any)=>{
   console.log(result)
   if(result){

     this.router.navigate(['/login']);
   }
 })

  }
}
