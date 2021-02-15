import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtCateService } from '../art-cate.service';
import { CategorieService } from '../categorie.service';
import { Article } from '../interface/articles';

@Component({
  selector: 'app-art-cate',
  templateUrl: './art-cate.component.html',
  styleUrls: ['./art-cate.component.css']
})
export class ArtCateComponent implements OnInit {

  constructor(private ArtCate :ArtCateService,  private route: ActivatedRoute ,private categorieService :CategorieService) { }
  cate:any = { 
    designatioCate : '',
    imageCate: '',
    available :false
};
arts:Article
  ngOnInit(): void {
    this.getCate(this.route.snapshot.params.codeCate);
  }
  getCate(codeCate:any){
    return this.categorieService.getId(codeCate).subscribe(res=>{
     // console.log(res)
      this.cate=res})}
  
  getAllCategory(){
    this.ArtCate.getAllArticles(this.cate.codeCate).subscribe(
      (res: any) => {
        console.log(res)
        this.arts=res
      },
      (err: any) => {
        console.log(err)
      }
    )
  }
}
