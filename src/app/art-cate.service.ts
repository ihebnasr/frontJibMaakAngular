import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from './interface/articles';
@Injectable({
  providedIn: 'root'
})
export class ArtCateService {

  constructor(private http :HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': "application/merge-patch+json"})
  };
  url='http://localhost:3000/article/';
  getAllArticles(codeCate:any){
    return this.http.get<Article>(`${this.url}/articleCate/${codeCate}`)
  }
}
