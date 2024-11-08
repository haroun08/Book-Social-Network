import { Component } from '@angular/core';
import {AuthenticationRequest} from "../../services/models/authentication-request";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AuthenticationService} from "../../services/services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authRequest: AuthenticationRequest = {email:'',password:''};
  errorMsg: Array<String> = [];

  constructor(
    private router : Router,
    private authService : AuthenticationService,
    // another service
  ) {

  }

  login() {
    this.errorMsg = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe(
      {
        next: () => {
            this.router.navigate(['books']);
          },
        error:(err) => {
          console.log(err);
        }
      });
  }

  register() {
    this.router.navigate(['register'])
  }
}
