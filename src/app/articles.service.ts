import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
import { Article } from './interface/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http :HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': "application/merge-patch+json"})
  };
  url='http://localhost:3000/api';
  getAllArticles(){
    return this.http.get(`${this.url}/articles`)
  }
  addArticle(article: any){
    return this.http.post(`${this.url}/articles`, article)
  }
  updateArticle(idart,articles:any ){
    return this.http.patch(`${this.url}/articles/${idart}`,articles,this.httpOptions)}

  
  deleteArticle(idart:any ){
    return this.http.delete(`${this.url}/articles/${idart}`);
  }
  getId(idart) {
    return this.http.get<Article>(`${this.url}/articles/${idart}`);
  } 
}

