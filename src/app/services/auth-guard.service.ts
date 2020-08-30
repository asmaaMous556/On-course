import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators'
import { state } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  

  constructor( private auth: AuthService,private state: RouterStateSnapshot,private router:Router) { }

  canActivate(){
  
 return this.auth.authenticate().pipe(
map(user=> {
  if (user) return true;
 
  this.router.navigate(['/login'],{queryParams:{returnUrl:this.state.url}})


}))
    
  }
}
