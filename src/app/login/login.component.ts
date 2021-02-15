import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private tokenStorageService: TokenStorageService, private router: Router) { }
  formGroup: FormGroup ;
  ngOnInit(): void {
    this.athenti();
  }
  athenti(){ this.formGroup = new FormGroup({
    email : new FormControl('',[Validators.required ]),
    password : new FormControl('',[Validators.required ]),

  })}
  login() {
    const val = this.formGroup.value;

    if (val.email && val.password) {
        this.auth.login(val.email, val.password)
            .subscribe(
                (res: any) => {
                    console.log("User is logged in");
                    console.log(res)
                    this.tokenStorageService.saveToken(res.token)
                    this.tokenStorageService.saveUser(res.user)
                    this.router.navigate(['article'])
                },
                (err: any)=>console.log(err)    

        );
    }
}
  }

