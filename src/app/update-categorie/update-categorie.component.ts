import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit {

  constructor( private categoryService : CategorieService,      private route: ActivatedRoute    ,private router: Router) { }
  categs : any = { 
    designatioCate : '',
    imageCate: '',
    available :false
};
  message = '';
  ngOnInit(): void {
    this.message = '';
    this.getCate(this.route.snapshot.params.codeCate);
  }
 

getCate(codecateg :any): void {
    this.categoryService.getId(codecateg)
      .subscribe(
        (res :any)=> {
          this.categs = res;
          console.log(res);
        },
        error => {
          console.log(error);
        });
  }
  //  setAvailableStatus(status): void {
  //    const data = {
  //      designatioCate: this.categs.designatioCate,
  //      imageCate: this.categs.imageCate,
  //      available: status
  //    };

  //    this.categoryService.updateCategorie(this.categs.codeCate, data)
  //      .subscribe(
  //        response => {
  //          this.categs.available = status;
  //          console.log(response);

  //        },
  //        error => {
  //          console.log(error);
  //        });
  //  }

  updateProduct(): void {
    this.categoryService.updateCategorie(this.categs.codeCate)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The category was updated!';
          this.router.navigate(['/category']);

        },
        error => {
          console.log(error);
        });
  }
  deleteProduct(): void {
    this.categoryService.deleteCategorie(this.categs.codeCate)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/category']);
        },
        error => {
          console.log(error);
        });
  }
}
