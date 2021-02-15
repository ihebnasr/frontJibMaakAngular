import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategorieService } from '../categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {

  constructor( private categoryService : CategorieService ,private router: Router) { }

  ngOnInit(): void {
  }

  addCategory(value: any){
    this.categoryService.addCategory(value).subscribe(
      (res: any) => {
        console.log(res)
        this.router.navigate(['article'])
      },
      (err: any) => {
        console.log(err)
      }
    )
    console.log(value)
  }

}
 
