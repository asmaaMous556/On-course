import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

import { category, CategoryResponse } from 'src/app/models/category';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
 
  categories:CategoryResponse;
  constructor(private categoryService:CategoryService) {
  
 
  }

  ngOnInit(): void {
    this.categoryService.getAllCat().subscribe(categories=>{
      this.categories= categories});

 
}

}
