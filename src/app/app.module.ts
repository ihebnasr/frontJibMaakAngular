import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelect2Module } from 'ng-select2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from  '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from  '@angular/material/card';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategorieComponent } from './categorie/categorie.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { AuthInterceptor } from './_helpers/auth.interceptor';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { ArticlesComponent } from './articles/articles.component';
import { TemplateComponent } from './template/template.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { ArtCateComponent } from './art-cate/art-cate.component';

import { FilterPipeModule } from 'ngx-filter-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FooterComponent } from './footer/footer.component';

@NgModule({ 
  declarations: [
    AppComponent,
    LoginComponent,
    CategorieComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    AddCategoriesComponent,
    UpdateCategorieComponent,
    ArticlesComponent,
    TemplateComponent,
    UpdateArticleComponent,
    AddArticleComponent,
    ArtCateComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    FormsModule,
    NgSelect2Module,
    FilterPipeModule,
    Ng2SearchPipeModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
