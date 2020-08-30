import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { course, CoursesResponse } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
api='http://localhost:3000/course/';
course:course;
  constructor(private http:HttpClient) { }

  getAll():Observable<CoursesResponse>{
   
    return this.http.get<CoursesResponse>(this.api); 
  }

  getById(id): Observable<course>{
    return this.http.get<course>(this.api +id)
  }

  createCourse(course):Observable<course>{
    return this.http.post<course>(this.api+'add-course/',this.course);
  }

  deleteCourse(id):Observable<course>{
    return this.http.delete<course>(this.api+'delete-course/'+id)
    
  }

}
