import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { CategorieService } from '../categorie.service';
import { Article } from '../interface/articles';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
  artForm: any;
  constructor( private articleService : ArticlesService, private categorieService:CategorieService,private route: ActivatedRoute    ,private router: Router) { 
    
  }
  arts : Article = {};
  cate=[]
  message = '';
  ngOnInit(): void {
    
    this.message = '';
    this.getArt(this.route.snapshot.params.idart);
    this.getcate()
    this.creatfrom(this.arts)
    
  }
  
  creatfrom(article:Article){ // alert(article.designationArt)
    this.artForm = new FormGroup({
    designationArt : new FormControl(article.designationArt,[Validators.required ]),
    image : new FormControl(article.image,[Validators.required ]),
    prixArt : new FormControl(article.prixArt,[Validators.required ]),
    categories: new FormControl(article.codeCate.substr(article.codeCate.length -1),[Validators.required ]),
 })}
  getcate(){
    return this.categorieService.getAllCate().subscribe(res=>{
     // console.log(res)
      this.cate=res
  
    })
  }

getArt(idart ): void {
    this.articleService.getId(idart)
      .subscribe(
        (res :any)=> {
          this.arts = res;
          this.creatfrom(this.arts)
          
        },
        error => {
          console.log(error);
        });
  }
  updateArticle(): void {
    this.arts={
      designationArt:this.artForm.controls.designationArt.value,
      image:this.artForm.controls.image.value,
      prixArt:parseFloat(this.artForm.controls.prixArt.value),
      codeCate:"api/categories/"+this.artForm.controls.categories.value
    }
    this.articleService.updateArticle(this.route.snapshot.params.idart, this.arts)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The category was updated!';
          this.router.navigate(['article']);

        },
      );
  }
  deleteProduct(): void {
    this.articleService.updateArticle(this.arts.idart,this.arts)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/article']);
        },
        error => {
          console.log(error);
        });
  }
}
