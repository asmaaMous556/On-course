import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
email:string
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  this.email=  this.authService.getUserEmail();
  }

 

}
