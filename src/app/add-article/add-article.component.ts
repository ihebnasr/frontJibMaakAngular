import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { CategorieService } from '../categorie.service';
import { Article } from '../interface/articles';
import { Select2Data } from 'ng-select2-component';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  artForm: FormGroup;

  constructor(private articlesService : ArticlesService, private activeRoute:ActivatedRoute,private categorieService: CategorieService,private router: Router) { }
  arts: Article= {};
  cate : any[]=[];
  isEditForm: boolean=true
  selected=[]
  data: Select2Data = []
  ngOnInit(): void {
    this.getcate()
    this.creatfrom(this.arts)
  }

  creatfrom(article:Article){ 
    this.artForm = new FormGroup({
    designationArt : new FormControl("",[Validators.required ]),
    image : new FormControl("",[Validators.required ]),
    prixArt : new FormControl("",[Validators.required ]),
    categories: new FormControl("",[Validators.required ]),
 })}
 getcate(){
  return this.categorieService.getAllCate().subscribe(res=>{
    console.log(res)
    this.cate=res

  })
}
addArticle(){
  this.arts={
    designationArt:this.artForm.controls.designationArt.value,
    image:this.artForm.controls.image.value,
    prixArt:parseFloat(this.artForm.controls.prixArt.value),
    codeCate:"api/categories/"+this.artForm.controls.categories.value

  }
  this.articlesService.addArticle(this.arts).subscribe({
    next:data=>{
      console.log(data)
      this.router.navigate(['article'])

    },
    error:error=>{
      console.log('there was an error',error)
    }
  })
  }
 

getArt(idart:number){
  this.articlesService.getId(idart).subscribe(res=>
    { this.creatfrom(res);console.log(res)
      this.arts=res
      this.getArtCategories(idart)
      
})

}
getArtCategories(codeCate:number){
this.arts.codeCate.forEach(cat => {
  this.categorieService.getCategory(cat).subscribe(res=>{
    this.selected.push(res.codeCate)
    this.artForm.controls.categories.setValue(this.selected)
  
});
 
});
}

}
