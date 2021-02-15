import { Component, OnInit } from '@angular/core';
import { Categorie } from '../interface/categorie';
import { CategorieService } from '../categorie.service';
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  constructor( private categoryService : CategorieService) { }
  categs :Categorie[];


  ngOnInit(): void {
    // this.cateSer.getAllCate()
    // .subscribe(
      
    //   (res: Categorie[])=>{console.log(res);
    //     this.categs=res},
    //     ()=>console.log("no data")

    // );
    this.getAllCategory()
  }

  getAllCategory(){
    this.categoryService.getAllCate().subscribe(
      (res: any) => {
        this.categs = res
        console.log(res)
      },
      (err: any) => {

      }
    )
  }

  addCategory(value: any){
    this.categoryService.addCategory(value).subscribe(
      (res: any) => {
        console.log
      },
      (err: any) => {

      }
    )
    console.log(value)
  }

}
