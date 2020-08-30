import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from './auth.service';
import { isNullOrUndefined } from 'util';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserReqInterceptorService  implements HttpInterceptor{

  constructor(private auth:AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
      const accessToken=this.auth.getAccessToken();
  
      if(isNullOrUndefined(accessToken)) return next.handle(req);

      req=req.clone({
        setHeaders:{
          Authorization:  accessToken
        }
      })
    return next.handle(req);
  }
  
  

  }

