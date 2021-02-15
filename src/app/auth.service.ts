import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN="JWT_TOKEN";
  private readonly REFERESH_TOKEN="REFERESH_TOKEN";
  constructor(private http:HttpClient) {

   }
   url='http://localhost:3000';
  login(email:string, password:string ) {
    return this.http.post(this.url+'/authentication_token', {email, password})
        // this is just the HTTP call,
        // we still need to handle the reception of the token
}
}
