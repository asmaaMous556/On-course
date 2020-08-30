import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { course, CoursesResponse } from 'src/app/models/course';
import { CategoryService } from 'src/app/services/category.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { category } from 'src/app/models/category';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
 categories: category[];
  constructor(private courseService:CourseService,
    private router:Router
    ,private categoryService:CategoryService) { 
    
   
  }

  ngOnInit(): void {
    this.categoryService.getAllCat().subscribe(res=>this.categories=res.categories);

  }

  save(course:CoursesResponse){
  this.courseService.createCourse(course);
  this.router.navigate(['/courses']);
  }

}
