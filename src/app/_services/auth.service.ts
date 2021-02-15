import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const AUTH_API = 'http://localhost:3000/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,private router: Router) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'authentication_token', {
      email,
      password
    }, httpOptions);
  }

  register( email: string, password: string,username: string): Observable<any> {
    return this.http.post(AUTH_API + '/api/utilisateurs', {
      email,
      password,
      username
    }, httpOptions);
  }
  logout() {
    this.router.navigate(['']);
  }
}
