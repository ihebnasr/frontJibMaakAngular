import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
import { Categorie } from './interface/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor (private http : HttpClient) { }
  url='http://localhost:3000/api';
  getAllCate(){
    return this.http.get<Categorie[]>(`${this.url}/categories`)
  }

  addCategory(category: any){
    return this.http.post<Categorie>(`${this.url}/categories`, category)
  }
  updateCategorie(category:any ){
    return this.http.put(`${this.url}/categories/${category.codeCate}`,category)}

  
  deleteCategorie(category:Categorie ){
    return this.http.delete<Categorie>(`${this.url}/categories/${category.codeCate}`);
  }
  getId(codeCate) {
    return this.http.get(`${this.url}/categories/${codeCate}`);} 
    getCategory(cat:any){
      return this.http.get<Categorie>(`${this.url}/categories/${cat}`);
    }
}