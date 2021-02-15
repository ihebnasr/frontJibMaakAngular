import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';
import { Categorie } from '../interface/categorie';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  constructor(private authService: AuthService,  private categoryService : CategorieService) { }
  categs :Categorie[];

  logoutAction() {
    this.authService.logout();
  }
  ngOnInit(){
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

}
