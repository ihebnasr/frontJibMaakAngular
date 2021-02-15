import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { ArtCateComponent } from './art-cate/art-cate.component';
import { ArticlesComponent } from './articles/articles.component';
import { CategorieComponent } from './categorie/categorie.component';
import { LoginComponent } from './login/login.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';

const routes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'categorie',component:CategorieComponent},
  {path: 'add_cate', component:AddCategoriesComponent},
  {path: 'categorie/:codeCate', component:UpdateCategorieComponent},
  {path: 'article', component:ArticlesComponent},
  {path: 'article/:idart', component:UpdateArticleComponent},
  {path: 'add_art',component:AddArticleComponent},
  {path: 'art_cate/:codeCate', component:ArtCateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
