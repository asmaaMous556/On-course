import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

import { course, CoursesResponse } from 'src/app/models/course';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
courses:CoursesResponse; // calling httpclient returns observable "container" including the response 
  constructor(private courseService:CourseService) {
   
   }

  ngOnInit(): void {
    this.courseService.getAll().subscribe(courses=>this.courses=courses);
  }

}
