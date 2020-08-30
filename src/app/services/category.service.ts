import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { category, CategoryResponse } from '../models/category';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
api="http://localhost:3000/category/";
  category:category

  constructor( private http:HttpClient) { }

  getAllCat():Observable<CategoryResponse>{
   return  this.http.get<CategoryResponse>(this.api);
   
  }

createCategory( newCategory:category):Observable<category>{
    return this.http.post<category>(this.api+'add-category'
    , JSON.stringify(newCategory));

}
 
getById( id):Observable<category>{
  return this.http.get<category>(this.api+id)
}


deleteCategory(id):Observable<category>{
  return this.http.delete<category>('http://localhost:3000/category/delete-cat/'+id)
}


}
