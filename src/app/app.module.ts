import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import{RouterModule} from '@angular/router';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { UsersComponent } from './components/users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CoursesComponent } from './components/courses/courses.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { LoginComponent } from './components/login/login.component'
import { HomeComponent } from './components/home/home.component';

import { CourseFormComponent } from './components/course-form/course-form.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuardService } from './services/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavBarComponent,
    CategoriesComponent,
    CoursesComponent,
    MyCoursesComponent,
    LoginComponent,
    CourseFormComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'login',component:LoginComponent},
      {path:'home',component:HomeComponent},
      {path:'courses',component:CoursesComponent},
      {path:'my-courses',component:MyCoursesComponent,canActivate:[AuthGuardService]},
      {path:'sign-up',component:SignUpComponent},
      {path:'categories',component:CategoriesComponent},
      {path:'course-form',component:CourseFormComponent}
      


    ]),

    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
