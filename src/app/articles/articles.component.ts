import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { CategorieService } from '../categorie.service';
import { Article } from '../interface/articles';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private articlesService : ArticlesService, private categorieService: CategorieService) { }
  arts: Article[]
  ngOnInit(): void {
    this.getAllCategory()
  }
  artFitre: any = { designationArt : '' };
  getAllCategory(){
    this.articlesService.getAllArticles().subscribe(
      (res: any) => {
        this.arts = res
        console.log(res)
      },
      (err: any) => {
        console.log(err)
      }
    )
  }
 
  
}


